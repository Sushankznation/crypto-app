import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../App.css'
import Loading from "./Loading";
function Crypto(){
    const {id} = useParams();
    const [coinData,setCoinData] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        async function cryptoGet(){
            const info = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            const data = await info.json();
            setCoinData(data);
            setLoading(false)
        }
        cryptoGet();
    },[])
    if(loading){
        return (
            <Loading/>
        )
    }else{
    return(
    <div className="main-page">
   <div className="container">
    <h1>{coinData.name}</h1>
    <img style={{width:"100px",height:"100px"}} src={coinData.image.large}/>
    <div className="coin-data">
        <div className="coin-row">
            <h3 className="coin-left">Symbol:</h3><h3 className="coin-right">{coinData.symbol}</h3>
        </div>
        <div className="coin-row">
            <h3 className="coin-left">Current Price:</h3><h3 className="coin-right">$ {coinData.market_data.current_price.usd.toLocaleString()}</h3>
        </div>
        <div className="coin-row">
            <h3 className="coin-left">Market Cap:</h3><h3 className="coin-right">$ {coinData.market_data.market_cap.usd.toLocaleString()}</h3>
        </div>
        <div className="coin-row">
            <h3 className="coin-left">Total Volume:</h3><h3 className="coin-right">$ {coinData.market_data.total_volume.usd.toLocaleString()}</h3>
        </div>
        <div className="coin-row">
            <h3 className="coin-left">24hr High:</h3><h3 className="coin-right green">$ {coinData.market_data.high_24h.usd.toLocaleString()}</h3>
        </div>
        <div className="coin-row">
            <h3 className="coin-left">24hr Low:</h3><h3 className="coin-right red">$ {coinData.market_data.low_24h.usd.toLocaleString()}</h3>
        </div>
    </div>
    <div>
        <a className="backa" href="/coin"><button className="back">Go Home</button></a>
    </div>
   </div>
   </div>
)
    }

}


export default Crypto;