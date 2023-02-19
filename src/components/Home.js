import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import {FaPencilAlt } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import {FaRegTrashAlt,FaUserPlus } from "react-icons/fa";
import{Link,useNavigate} from 'react-router-dom';
import { Router } from 'react-router-dom';
function Home() {
  const history=useNavigate();
  const handleDelete=(id)=>{
    alert(`Are you sure you want to delete?`)
    console.log(Employee.map((item)=>item.id).indexOf(id));//index of array value
    let index=Employee.map((item)=>item.id).indexOf(id)
    console.log(index);
    Employee.splice(index,1)//remove last item from the array
    console.log(Employee);
    history('/')
  }
  const handleEdit=(id,empname,age,designation,salary)=>{
    localStorage.setItem("ID",id);
    localStorage.setItem("NAME",empname);
    localStorage.setItem("AGE",age);
    localStorage.setItem("DESIGNATION",designation);
    localStorage.setItem("SALARY",JSON.stringify(salary));


  }
  
  return (
    <div>
        <h1 className='text-center mt-5'>Employee Management System</h1>
        <p className='p-4'>An employee management system is a distributed system developed to maintain the employee details and the company workflow process systematically.EMS helps to eliminate the manual process and saves a lot of time and money. This system maintains the professional and personal details of the employees and the company in a safe manner. The employee management system lowers the burden and the pressure on HRs and the business managers. Thanks to the technology which offers us a plethora of solutions which makes the work easier and faster.</p>
        <Link to={'/add'}>
        <Button className='btn btn-success'>Add<FaUserPlus/></Button>
        </Link>
      <Table striped bordered hover style={{margin:"50px",border:"2px solid "}} >
      <thead>
        <tr>
          <th>Id</th>
          <th>User Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        Employee && Employee.length>0 ?
        Employee.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.empname}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
                <td>
                  <Link to={'/edit'}><Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)}><FaPencilAlt/></Button></Link>&nbsp;&nbsp;&nbsp;
                  <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><FaRegTrashAlt/></Button>
                  </td>
                
            </tr>
        ))
        :"No data available"
       }
      </tbody>
    </Table> 
    </div>
  )
}

export default Home
