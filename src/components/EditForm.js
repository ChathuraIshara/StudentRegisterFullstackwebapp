import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const EditForm=({name,setName,address,setAddress,phone,setPhone,count,setCount,succesState,setSuccessState,error,setError})=>
{

    const [uname,setUname]=useState(null);
    const [uaddress,setUaddress]=useState(null);
    const [uphone,setUphone]=useState(null);

    const [nError,setNerror]=useState(null);

    const navigate=useNavigate();
   
  
    // const loc=location.state;



    const {id}=useParams();

    useEffect(()=>
    {
     fetch(`https://localhost:7074/api/Studentapi/${id}`).then((response)=>
     {
       return response.json();
     }).then((responseData)=>
     {
       setError("");
       setSuccessState("");
       console.log(responseData);
       setUname(responseData.name);
       setUaddress(responseData.address);
       setUphone(responseData.phone);



       

     })
 
    },[]);


   





    const handleName=(e)=>
    {
        setUname(e.target.value);
    }

    const handleAddress=(e)=>
    {
        setUaddress(e.target.value);
    }


    const handlePhone=(e)=>
    {
        setUphone(e.target.value);
    }

    const handleSuccessState = () => {
        setSuccessState("");
      };

      const handleErrorState = () => {
        setNerror("");
      };

      async function handleUpdate(event)
      {
       event.preventDefault();
   
      try
          {
           
              await axios.put(`https://localhost:7074/api/Studentapi/${id}`,
          {
           
            id:id,
            name: uname,
            address: uaddress,
            phone: uphone
          
          });
           // alert("Registation Updateddddd");
            // setName("");
            // setAddress("");
            // setPhone("");
            setSuccessState("Student succesfully updated!")
             navigate('/');
           
  
           
          
          }
      catch(err)
          {
            setNerror(err.response.data);
          }
     }
  
  




    return <div className="container mt-3">
        
      
        {nError &&
            <div className="alert alert-danger" role="alert">
              <button
                onClick={handleErrorState}
                className="close"
                type="button"
                data-dismiss="alert"
                aria-hidden={nError ? "true" : "false"}
              >
                x
              </button>
              {nError}
            </div>
}
      
        <form onSubmit={handleUpdate}>
            <div className="row mt-3">
                <div className="col-2">
                    <label className="">Name: </label>
                </div>
                <div className="col-10">
                    <input  type="text" className="form-control" placeholder="Enter your name" value={uname} onChange={handleName}></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-2">
                    <label>Address: </label>
                </div>
                <div className="col-10">
                    <input type="text" className="form-control" placeholder="Enter your address" value={uaddress} onChange={handleAddress}></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-2">
                    <label>Phone: </label>
                </div>
                <div className="col-10">
                    <input type="text" className="form-control" placeholder="Enter your phone" value={uphone} onChange={handlePhone}></input>
                </div>
            </div>
            <div className="text-start mt-3">
            <input type="submit" value="Update" className="btn btn-success"></input> 

            </div>
           

        </form>

    </div>
}

export default EditForm;