import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Item=({item,successState,setSuccessState,count,setCount})=>
{
    async function deleteStudent(studentid)
    {
      await axios.delete(`https://localhost:7074/api/Studentapi/${studentid}`);
      console.log("succesfully deleted student");
      setSuccessState("succesfully deleted student");
      setCount(count+1);


      

      







      

      

      
      
 
 
    }

    
    return <React.Fragment>
         <tbody>
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.phone}</td>
            <td><Link to={`/editpage/${item.id}`}><button  className="btn btn-warning">Edit</button></Link></td>
            <td><button className="btn btn-danger" onClick={()=>
                deleteStudent(item.id)
            }>Delete</button></td>
        </tr>
    </tbody>


    </React.Fragment>
    
    
         
    
   
       

       
       
        
    
}

export default Item;