import React, {useEffect, useState} from 'react'
import axios from 'axios';


const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=807";
function Pokemon() {
const [state, setState] = useState(0);

useEffect(() => {

axios.get(baseUrl)  
            .then(response => {
            setState(response.data)
                })

}, []);



console.log(state.results)
  return (
    <div>
        {state.results ? state.results.map((item, index) =>{
        return (<ul key={index}>{item.name}</ul>)}):null}
        

    </div>
  );
}

export default Pokemon