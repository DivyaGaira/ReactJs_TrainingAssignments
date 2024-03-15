import React, { useState } from "react";

function EmployeeCRUD() {
  const [empArray, setEmpArray] = useState([]);

  // For reading data from user through textboxes
  const [empno, setEmpno] = useState("");
  const [ename, setEname] = useState("");
  const [job, setJob] = useState("");
  const [sal, setSal] = useState("");
  const [deptno, setDeptno] = useState("");

  function getEmpButton_click() {
    let tempArray = [
      { empno: 21, ename: "Harish", job: "Designer", sal: 20000, deptno: 10 },
      { empno: 22, ename: "Veena", job: "Technician", sal: 21000, deptno: 20 },
      { empno: 23, ename: "Rohan", job: "Analyst", sal: 20000, deptno: 30 },
    ];

    setEmpArray(tempArray);
  }

  function addEmpButton_click() {
    let empObj = {};
    empObj.empno = empno;
    empObj.ename = ename;
    empObj.job = job;
    empObj.sal = sal;
    empObj.deptno = deptno;

    let tempArray = [...empArray];
    tempArray.push(empObj);
    setEmpArray(tempArray);

    clearFields();
  }

  function clearFields() {
    setEmpno("");
    setEname("");
    setJob("");
    setSal("");
    setDeptno("");
  }

  function deleteEmp_click(eno) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      let tempArray = [...empArray];

      let index = tempArray.findIndex((item) => item.empno == eno);
      tempArray.splice(index, 1);

      setEmpArray(tempArray);
    }
  }

  function selectEmp_click(eno) {
    let empObj = empArray.find((item) => item.empno == eno);

    setEmpno(empObj.empno);
    setEname(empObj.ename);
    setJob(empObj.job);
    setSal(empObj.sal);
    setDeptno(empObj.deptno);
  }

  function updateEmpButton_click() {
    let tempArray = [...empArray];

    let index = tempArray.findIndex((item) => item.empno == empno);
    tempArray[index].ename = ename;
    tempArray[index].job = job;
    tempArray[index].sal = sal;
    tempArray[index].deptno = deptno;

    setEmpArray(tempArray);
    clearFields();
  }

  let resultArray = empArray.map((item, index) => {
    return (
      <tr key={index}>
        <td> {item.empno} </td>
        <td> {item.ename} </td>
        <td> {item.job} </td>
        <td> {item.sal} </td>
        <td> {item.deptno} </td>
        <td>
          <a onClick={() => selectEmp_click(item.empno)} href="javascript:void(0);">
            <img width="30" src="./Images/select-icon.jpg" />
          </a>
          |<span style={{marginRight: '10px'}}/>
          <a onClick={() => deleteEmp_click(item.empno)} href="javascript:void(0);">
            <img width="30" src="./Images/delete-icon.jpg" />
          </a>
        </td>
      </tr>
    );
  });

  return (
    <>
      
    <h3>Employee CRUD Operations</h3>
    <hr />

      <input type="text" placeholder="Emp Number" value={empno} onChange={(e) => setEmpno(e.target.value)} />
      <input type="text" placeholder="Emp Name" value={ename} onChange={(e) => setEname(e.target.value)} />
      <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
      <input type="text" placeholder="Salary" value={sal} onChange={(e) => setSal(e.target.value)} />
      <input type="text" placeholder="Dept No" value={deptno} onChange={(e) => setDeptno(e.target.value)} />
      <hr />

      <input type="button" onClick={getEmpButton_click} value="Get Emp Details" />
      <input type="button" onClick={addEmpButton_click} value="Add Emp" />
      <input type="button" onClick={updateEmpButton_click} value="Update Emp Details" />
      <hr />

      <table border="1" width="600" cellspacing="0" cellpadding="3">
        <tr>
          <th>Emp Number</th>
          <th>Emp Name</th>
          <th>Job</th>
          <th>Salary</th>
          <th>Dept No</th>
          <th></th>
        </tr>
        {resultArray}
      </table>
    </>
  );
}

export default EmployeeCRUD;


