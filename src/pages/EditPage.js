import { useEffect } from "react";
import EditForm from "../components/EditForm";
import Header from "../components/Header"

const EditPage=({name,setName,address,setAddress,phone,setPhone,count,setCount,successState,setSuccessState,error,setError})=>
{
   


    return <div className="container">
        <h2 className="text-center display-3">Edit Student Details</h2>
        <EditForm name={name} setName={setName} address={address} setAddress={setAddress} phone={phone} setPhone={setPhone} count={count} setCount={setCount} succesState={successState} setSuccessState={setSuccessState} error={error} setError={setError}/>
       

    </div>
}

export default EditPage;