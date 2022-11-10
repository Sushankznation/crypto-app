import React, { useState } from "react";
import '../App.css'
export default function Table({allCoins}){
   
    
    return (
        <>
            <table className="cointable">
                {allCoins.map((value,index)=>{
                    return (
                        <tr className="cointr" key={index}>
                          
                            <td><img className="coinimg" src={value.image}/></td>
                            <td>{value.name}</td>
                            <td>{value.symbol.toUpperCase()}</td>
                            <td>{`$ ${value.current_price}`}</td>
                            <td><div className="perprice" style={{color:value.price_change_percentage_24h>0?"green":"red"}}>{`${value.price_change_percentage_24h.toFixed(2)}%`}</div></td>
                            <td>{`$ ${value.market_cap.toLocaleString("en-US")}`}</td>
                            <td><button><a className="atag" href={`/coin/${value.id}`}>Show Details</a></button></td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}