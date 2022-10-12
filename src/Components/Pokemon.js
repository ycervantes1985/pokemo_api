import React, {useEffect, useState} from 'react'



function Pokemon() {
const [state, setState] = useState(0);

useEffect(() => {

  fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
  
        .then(response =>{
        return response.json()

        
})

        .then(response => {
            setState({
                people:response.results
                    })
                })
       
}, []);


  return (
    <div>
        {state.people ? state.people.map((item, index) =>{
        return (<li key={index}>{item.name}</li>)}):null}

    </div>
  );
}

export default Pokemon