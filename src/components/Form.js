import axios from "axios";
import { useState } from "react";

const Form=({name,setName,address,setAddress,phone,setPhone,count,setCount,successState,setSuccessState,error,setError})=>
{
   





    const handleName=(e)=>
    {
        setName(e.target.value);
    }

    const handleAddress=(e)=>
    {
        setAddress(e.target.value);
    }


    const handlePhone=(e)=>
    {
        setPhone(e.target.value);
    }

    const handleSuccessState = () => {
        setSuccessState("");
      };

      const handleErrorState = () => {
        setError("");
      };

   async function handleSubmit(event)
    {
        event.preventDefault();
        try{
            await axios.post("https://localhost:7074/api/Studentapi",
            {
                name:name,
                address:address,
                phone:phone

            });
            console.log("Student inserted succesfully!");
           
            setName("");
            setAddress("");
            setPhone("");
            setCount(count+1);
            setSuccessState("Student Registered Succesfully!")
           
        }
        catch(err)
        {
        var msg=err.response.data;
           console.log(err.response.data);
           setError(msg);
        }
        

    }



    return <div className="container mt-3">
        
        {successState &&
            <div className="alert alert-success" role="alert">
              <button
                onClick={handleSuccessState}
                className="close"
                type="button"
                data-dismiss="alert"
                aria-hidden={successState ? "true" : "false"}
              >
                x
              </button>
              {successState}
            </div>
}
{error &&
            <div className="alert alert-danger" role="alert">
              <button
                onClick={handleErrorState}
                className="close"
                type="button"
                data-dismiss="alert"
                aria-hidden={error ? "true" : "false"}
              >
                x
              </button>
              {error}
            </div>
}
      
        <form onSubmit={handleSubmit}>
            <div className="row mt-3">
                <div className="col-2">
                    <label className="">Name: </label>
                </div>
                <div className="col-10">
                    <input  type="text" className="form-control" placeholder="Enter your name" value={name} onChange={handleName}></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-2">
                    <label>Address: </label>
                </div>
                <div className="col-10">
                    <input type="text" className="form-control" placeholder="Enter your address" value={address} onChange={handleAddress}></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-2">
                    <label>Phone: </label>
                </div>
                <div className="col-10">
                    <input type="text" className="form-control" placeholder="Enter your phone" value={phone} onChange={handlePhone}></input>
                </div>
            </div>
            <div className="text-start mt-3">
            <input type="submit" value="Register" className="btn btn-primary"></input> 

            </div>
           

        </form>

    </div>
}

export default Form;