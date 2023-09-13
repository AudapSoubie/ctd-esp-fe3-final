import React from "react";
import { useState } from "react";


const Form = () => {
 
  const [name,setName]=useState("")
  const [email ,setEmail ]=useState("")
  const[show, setShow] = useState(false)
  const [ error, setError] = useState(false)
  const handleSubmit = (event) =>{
    event.preventDefault()
    if(name.length <= 5){
     setShow(false);
      setError(true);
    return
       
    } else {
      setShow(true);
      setError(false);
    }
      if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {

        setShow(false);
        setError(true); 
     return
       
      } else {
        setShow(true);
        setError(false);
      }
    };

    return (
      
      <div>
        <form onSubmit ={handleSubmit}>
        <label htmlFor="Name">Nombre</label>
        <input type="text"onChange={(event)=> setName(event.target.value)}/>
        <label htmlFor="">Email</label>
        <input type="text"onChange={(event)=> setEmail(event.target.value)}/>
        <button>Enviar</button>
        {show && <>
          <p>Gracias {name}, te contactaremos cuando antes via mail </p>
         </>}
         {error && <>
         <p>Porfavor corrobore sus datos nuevamente </p>
         </>}
        </form>
      </div>
    );
  };
          
  
  export default Form;
        
      
      
    
