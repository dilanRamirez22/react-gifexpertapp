import React, { useState } from 'react'
import '../assets/css/searchGif.css';
const SearchGif = (props) => {
const [Input, setInput] = useState('');

   const submit =(e)=>{
     e.preventDefault();
     props.setCategoria(Input);
     setInput('');
   }

   const verificarGif=(e)=>{
       setInput(e.target.value)
   }
    return (
        <form className='form' onSubmit={ submit }>
            <input
              className="input" 
              type='text'
              placeholder="buscar gif"
              value={Input}
              onChange={verificarGif}
            >
            </input>
            <button className="button">Buscar</button>
        </form>
    )
}

export default SearchGif
