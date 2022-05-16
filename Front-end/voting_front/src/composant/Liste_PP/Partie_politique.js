import React from 'react'
import Liste_pp from './liste_pp'
import "./liste_pp.css"
import { useState } from 'react';


export default function Partie_politique() {
    
    const [formFields, setFormFields] = useState([
        { name: '', President: '' },
      ])
    
      const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
      }
    
      const submit = (e) => { 
        e.preventDefault();
        console.log(formFields)
      }
    
      const addFields = () => {
        let object = {
          name: '',
          President: ''
        }
    
        setFormFields([...formFields, object])
      }
    
      const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
      }
  
    return (
    <div className="body_Partie">
         
         
         
      <form onSubmit={submit} className="form_1">
        <h1>Ajouter Partie Politique</h1>
        {formFields.map((form, index) => {
          return (
            <div>
                
              <input
                name='name'
                placeholder='Partie Politique'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              className="input_form"/>
              <input
                name='President'
                placeholder='President'
                onChange={event => handleFormChange(event, index)}
                value={form.President}
                className="input_form"
              />
              <button onClick={() => removeFields(index)} className="delete">Remove</button>
            </div>
          )
        })}
<div className='form_footer'>
         <button onClick={addFields} className="add_form">Add More..</button>
      <br />
      <button onClick={submit} className="valide">Validé</button>
</div>
      </form>
     
     <Liste_pp />  


    </div>
  )
}
