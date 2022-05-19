import React from 'react'
import Header from './Header'

const Courseview = () => {
    var Course=[
        {
            "title":"mca",
            "duration":"6",
            "desg":"Accountant",
            "venue":"kochi",
            "date":"22"
            
        },
    
    
        {
            "title":"mba",
            "duration":"6",
            "desg":"python",
            "venue":"tvm",
            "date":"23"
            
        },
        {
            "title":"bca",
            "duration":"6",
            "desg":"Accountant",
            "venue":"banglore",
            "date":"24"
            
        },
    
    ]
    return (
        <div>
            
      <Header/>
     <div className="container">
     <div className="row">
         <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
      <div className="row g-3">
      <div className='col col-12 col-sm-12 col-md-12 col-lg-12'>
      <table class="table table-success">
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
        <td>{value.title}</td>
        <td>{value.desg}</td>
        <td>{value.duration}</td>
        <td>{value.venue}</td>
        <td>{value.date}</td>
         
        </tr>
    
    
             } )}
               </tbody>
    </table>
             </div>    
               </div>
               </div>
               </div>
               </div>
               </div>
       
    
      )
}

export default Courseview