import Header from "../components/Header";
import Form from "../components/Form";
import Students from "../components/Students";



const Home=({name,setName,address,setAddress,phone,setPhone,count,setCount,successState,setSuccessState,error,setError})=>
{
    return <div>
       <Header/> 
      <Form name={name} setName={setName} address={address} setAddress={setAddress} phone={phone} setPhone={setPhone} count={count} setCount={setCount} error={error} setError={setError} successState={successState} setSuccessState={setSuccessState}/>
      <Students count={count} setCount={setCount} successState={successState} setSuccessState={setSuccessState}/>
      
     
      
        
    </div>
}

export default Home;