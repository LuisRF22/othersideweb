import React from "react";
import { useForm } from "react-hook-form";
import "../Contacto/Contacto.css";

const Contacto = () => {
const {register, handleSubmit}= useForm("");
const onSubmit=(data) =>{

}


  return (
    <>
    <h2> Suscribirse </h2>
<form className="formulario" onSubmit = {handleSubmit(onSubmit)}>
  
  <div>
    <label> Nombre</label>
    <input className="Nombre" type ="text"{...register('nombre',{required:true,})}/>
  </div>
  
  <div>
  <label className=" Apellido "> Apellido</label>
    <input type ="text"{...register('apellido',{required:true,})}/>
  </div>
  
  <div>
  <label className=" Email "> EMAIL</label>
    <input type ="text"{...register('EMAIL',{required:true,})}/>
  </div>
 
 
  
  <input className="Boton " type="submit" value="suscripcion" />
  
  
   
  
</form>

</>
  );
};
    

export default Contacto