import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import EditPage from './pages/EditPage';

function App() {
  const [name,setName]=useState("");
  const [address,setAddress]=useState("");
  const [phone,setPhone]=useState("");
  const [count,setCount]=useState(0);
  const [successState,setSuccessState]=useState(null);
  const [error,setError]=useState(null);
  


  return(
    <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home name={name} setName={setName} address={address} setAddress={setAddress} phone={phone} setPhone={setPhone} count={count} setCount={setCount} successState={successState} setSuccessState={setSuccessState} error={error} setError={setError} />}></Route>
        <Route path="/editpage/:id" element={<EditPage  name={name} setName={setName} address={address} setAddress={setAddress} phone={phone} setPhone={setPhone} count={count} setCount={setCount} successState={successState} setSuccessState={setSuccessState} error={error} setError={setError}/>}></Route>
        
        
       </Routes>
      </BrowserRouter>
    
      
    
    </div>
  );
}

export default App;
