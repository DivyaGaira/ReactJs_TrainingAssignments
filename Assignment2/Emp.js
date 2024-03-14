
import 'bootstrap/dist/css/bootstrap.min.css';
function Emp() {
  let empno = 101;
  let ename = "Mac";
  let job = "xyz";
  let salary= 27000;
  let dept= "XYZ"
  return (
    <>
    <h3>Developing Web Applicaton using React JS</h3>

<div>
  <table className="table table-bordered">
    <thead>
    <tr>
      <th>EmpNo</th>
      <th>EmpName</th>
      <th>Job</th>
      <th>Salary</th>
      <th>Dept</th>
    </tr>
    </thead>
    <tbody>
      <td>{empno}</td>
      <td>{ename}</td>
      <td>{job}</td>
      <td>{salary}</td>
      <td>{dept}</td>
    </tbody>
  </table>
  
</div>
    </>
    
  );
}

export default Emp;