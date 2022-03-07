import React from "react";
import { useState } from "react";


function Myform() {
    const [name,setName]=useState("abhishek kumar");
    const handleSubmit = (event) => {
        /* event.preventDefault(); */
        alert(`your name is : ${name}`)
    }
    return (
        <form onSubmit={handleSubmit()}>
            <label>Enter your Name:
                <input type="text" placeholder="Enter your Name"/>
               
            </label>
              {/*  <br></br>
            <label>Enter your Email:-
                <input type="varchar" value={name} placeholder="Enter your Email"/>
               
            </label>
            <br></br>
            <label>Enter your Password:-
                <input type="password" placeholder="Enter your Pasword"/>
            
            </label> */}
            <button type="submit"></button>
        </form>
    )
}
export default Myform;