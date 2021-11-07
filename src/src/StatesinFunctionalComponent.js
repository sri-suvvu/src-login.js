import React ,{useState,useEffect} from 'react'


function StatesinFunctionalComponent() {

    let [age,setAge]=useState(27)

    useEffect(()=>{
        document.title=`Surya age is ${age}`
    })
    return (
        <div>
            <h1 onMouseOver={()=>{setAge(25)}}>Surya Age is {age}</h1>
        </div>
    )
}

export default StatesinFunctionalComponent
