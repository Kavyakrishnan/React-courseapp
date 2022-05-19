import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Courseview = () => {
    var[Course,setCourse]=useState([])
    var[Loadstatus,setLoadstatus]=useState(true)
    axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then((response)=>{
        console.log(response.data)
      
   
   
    setCourse(response.data)
   setLoadstatus(false)
   })
        
    return (
        <div>
            
      <Header/>
     <div className="container">
     <div className="row">
         <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
      <div className="row g-3">
      <div className='col col-12 col-sm-12 col-md-12 col-lg-12'>
          {Loadstatus? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:<table class="table table-success">
                         <thead>
                             <tr>
                                 <th scope="col">NO</th>
                                 <th scope="col">title</th>
                                 <th scope="col">duration</th>
                                 <th scope="col">Desg</th>
                                 <th scope="col">venue</th>
                                 <th scope="col">date</th>
                                 
                             </tr>
                         </thead> 
      <tbody>   
      {Course.map((value,key)=>{
                 return <tr>      
        <th scope="row">1</th>
        <td>{value.courseTitle}</td>
        <td>{value.courseDescription}</td>
        <td>{value.courseDuration}</td>
        <td>{value.courseVenue}</td>
        <td>{value.courseDate}</td>
         
        </tr>
    
    
             } )}
               </tbody>
    </table>
}
    
             </div>    
               </div>
               </div>
               </div>
               </div>
               </div>
       
    
      )
}

export default Courseview