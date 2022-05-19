import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Course = () => {
    var[courseTitle,setCtitle]=useState("")
    var[courseDuration,setCduration]=useState("")
    var[courseDescription,setCdescription]=useState("")
    var[courseVenue,setCvenue]=useState("")
    var[courseDate,setCdate]=useState("")
    const subData=()=>{
        const data={"courseTitle":courseTitle,"courseDuration":courseDuration,"courseDescription":courseDescription,"courseVenue":courseVenue,"courseDate":courseDate}
        console.log(data)
        axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",data).then((response)=>{
            console.log(response.data)
            

        if(response.data.status= "success")
        {
            alert("Successfully Inserted")
        }
            else
            {
                alert("Failed to load")
            }
            
        }
            

        )
        }
    
  return (
    <div>
        <Header/><div className="container">
    <div className="row g-2">
        <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Coursetitle</label>
                    <input onChange={(e)=>setCtitle(e.target.value)} type="text" class="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Duration</label>
                    <input onChange={(e)=>setCduration(e.target.value)} type="text" class="form-control"/> 
                </div>
                <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Description</label>
                    <input onChange={(e)=>setCdescription(e.target.value)}  type="text" class="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Venue</label>
                    <input onChange={(e)=>setCvenue(e.target.value)}   type="text" class="form-control"/> 
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Date</label>
                    <input onChange={(e)=>setCdate(e.target.value)}  type="text" class="form-control"/>
                </div>
            
               
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subData}  class="btn btn-success">Register</button>
                </div>
            </div>
        </div>
    </div>
</div></div>

  )
}

export default Course