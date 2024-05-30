import { useState } from "react"


function Detective(){
const [sherlock, setSHerlock] = useState('психопат');

const handleClick = () =>{
    setSHerlock('высокоактивный социопат')
}

    return (
        <>
          <div>Шерлок - {sherlock}</div>
        <button onClick={handleClick}>Узнать правду</button>
        </>
      
    )
}

export default Detective