import React  from 'react';
import { Link, useParams } from 'react-router-dom';

function Details(props)
{     
    const {id} = useParams();
  
    let empsArray =  [
        { empno: 21, ename: "Harish", job: "Designer", deptno: 104 },
      { empno: 22, ename: "Veena", job: "Technician", deptno: 103 },
      { empno: 23, ename: "Rohan", job: "Analyst", deptno: 104 }
   ];

   let empObj =  empsArray.find(item => item.empno == id); 
 
    return (
    <div>
     <h3>Selected Employee Details</h3>       
     <hr/>
     <div>
        Employee Number :  {empObj.empno}  <br/>
         Employee Name :  {empObj.ename}  <br/>
         Employee Job :  {empObj.job}  <br/>
         Employee Deptno :  {empObj.deptno}  <br/>  
     </div>
        <hr/>
      <Link  to="/Emps">Back to Employees</Link> 
    </div> 
    );
   
}  

export default Details;