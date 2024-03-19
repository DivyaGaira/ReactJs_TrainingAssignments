import React from 'react';
import { Link } from 'react-router-dom';
import './Emps.css';

export default  function Emps()
{  
    let emps =  [
            { empno: 21, ename: "Harish", job: "Designer", deptno: 104 },
            { empno: 22, ename: "Veena", job: "Technician", deptno: 103 },
            { empno: 23, ename: "Rohan", job: "Analyst", deptno: 104 },
            {  empno : 24, ename:"Dheeraj", job: "Tester", deptno : 102  },
            {  empno : 25, ename:"Sumit", job: "Manager", deptno : 101  },
            {  empno : 26, ename:"Astha", job: "Lead", deptno : 101  },
            {  empno : 27, ename:"Heera", job: "Programmer", deptno : 103  },
            {  empno : 28, ename:"Neelu", job: "Tester", deptno : 104  },
        ];
 

    
 
        var result = emps.map( (item, index) => 
            <tr className={ index % 2 == 0?"c2":"c3" } >  
               <td> {item.empno}  </td> 
               <td> {item.ename}  </td> 
               <td> {item.job}  </td> 
               <td> {item.deptno}  </td> 
               <td align='center'>
                     <Link to={"/Details/" + item.empno}>Details</Link>
               </td>
            </tr>);

      return (
        <div>             
            <h3>All Employee Details</h3>
            <table  border="2"  cellpadding="5"  cellSpacing="0" width="700">
                <tr className="c1">
                    <th>Emp Number</th>
                    <th>Emp Name</th>
                    <th>Emp Job</th>
                    <th>Emp Deptno</th>    
                    <th></th>                
                </tr>
                {result}
            </table>
        </div>  );
    }
 

 