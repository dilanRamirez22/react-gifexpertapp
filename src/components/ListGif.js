import React from 'react'
import { useFetchGif } from '../assets/js/useFetchGif'
import Gif from '../components/Gif'
import  '../assets/css/grid.css'

const ListGif = (props) => {
 
    const{data}=useFetchGif(props.Categoria);
    return (
      <>
      <h1 className="titulo-categoria">{props.Categoria}</h1>
        <div className="card-container">
          {
          data.map( ({id,title,images}) =>(
            <Gif
            key={id}
            id={id}
            title={title}
            images={images}
            />
           ))
          }
        </div>
      </>
    )
}
export default ListGif
