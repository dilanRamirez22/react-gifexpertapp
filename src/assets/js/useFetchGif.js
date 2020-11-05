import { useEffect, useState} from 'react'
import { gifFetch } from './gifFetch';


export const useFetchGif=(categoria)=>{

    const [state,setState]=useState({
         data:[],
         loading:false
    });

  
    useEffect(() => {
        if(categoria!==''){
        gifFetch(categoria)
        .then(gif=>{
            setState({
              data:gif.data,
              loading:true
            })
            
        });
    }
    }, [categoria])
    return state;

}