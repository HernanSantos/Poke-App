import { useState } from "react";

export const useForm = (initialState = "") => {

    const [valueForm, setValueForm] = useState(initialState); //formulario

    const handleChange = (event) =>{
        setValueForm(event.target.value)
      }
    
    const reset = () =>{
        setValueForm(initialState)
    }

    return [valueForm,handleChange,reset];
}
