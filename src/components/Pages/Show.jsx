import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Show = () => {
                
    
  const [student,setStudent] = useState([])


  async function getData () {
  const response = await axios.get('http://localhost:8080/student')
  //console.log(response)
  const result = response.data
  //console.log(result)
  setStudent(result)
  }
  useEffect(()=>{
  getData()
  },[])
  




  return (
    <div>
            <h2 className='w-50 mx-auto bg-success rounded-4 p-2 mb-2
mt-2'>Register Student Details </h2>



<table className='table'>
<thead>
<tr>
<th>ID</th>
<th>First Name</th>
<th>Last Name</th>
<th>Address</th>
<th>Gender</th>
<th>State</th>
<th>City</th>
<th>DOB</th>
<th>Pincode</th>
<th>Course</th>
<th>Email</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{
student.map((stu,index)=>{
return(
<tr>
<td>{index + 1}</td>
<td>{stu.fname}</td>
<td>{stu.lname}</td>
<td>{stu.address}</td>
<td>{stu.gender}</td>
<td>{stu.state}</td>
<td>{stu.city}</td>
<td>{stu.dob}</td>
<td>{stu.pincode}</td>
<td>{stu.course}</td>
<td>{stu.email}</td>
<td>
<NavLink to={`/update/student/${stu.id}`}><button
className='btn btn-warning me-1'>Edit</button></NavLink>
<button className='btn btn-danger'>Delete</button>
</td>
</tr>
)
})
}
</tbody>
</table>
    </div>
  )
}

export default Show