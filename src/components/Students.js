import { useEffect, useState } from "react";
import Item from "./Item";

const Students=({count,setCount,setSuccessState,successState})=>
{
    const [slist,setSlist]=useState(null);


   useEffect(()=>
   {
    fetch("https://localhost:7074/api/Studentapi").then((response)=>
    {
      return response.json();
    }).then((responseData)=>
    {
      console.log(responseData);
      setSlist(responseData);
    })

   },[count]);
  




    return (<div className="container mt-4">
        <table className="table table-dark">
          <thead>
          <tr>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>Student Address</th>
            <th>Student Phone</th>
            <th colspan="2">Actions</th>
            </tr>  

          </thead>
           
         
            {slist && slist.map((item)=>
            (
                 <Item key={item.id} item={item} successState={successState} setSuccessState={setSuccessState} count={count} setCount={setCount}/> 
               
        
               
          ))}


            
        </table>
    </div>
    )
}


export default Students;