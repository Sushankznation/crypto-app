import React from "react";
import { Link } from "react-router-dom";
export default function Home(){
    return(
        <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>  
            <h1 style={{fontSize:"70px"}}>Welcome to Crypto</h1>
            <a href="/coin"><button style={{width:"200px",height:"40px",transition:"ease-in-out 3s"}}>Show</button></a>
        </div>
    )
}