import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const cod = {
    color:'red'
}

const Covid = () =>{

const[data,setdata] = useState([]);

const getCovidData = async () =>{

    try{
        const res = await fetch('https://data.covid19india.org/data.json');
       const actualData =  await res.json();
       
       setdata(actualData.statewise[0]);
    } catch (err) {
        console.log(err);
    }

 
}


    useEffect(() =>{
        getCovidData();
    } ,[]);

    return(
        <><section>
        <h1 className="text-center" style={cod}> 🔴  Live</h1>
        <h2 className="text-center">COVID -19 CORONAVIRUS TRACKER</h2>

        <ul>
            <li className="card1">
                <div className="card_main">
                 <div className="card_inner">
<h1 className="card_name"><span>OUR</span>COUNTRY</h1>
<h2 className="card_total card_small">INDIA</h2>
                 </div>
                </div>
            </li> <li className="card2">
                <div className="card_main">
                 <div className="card_inner">
<h1 className="card_name"><span>total</span>Recovered</h1>
<h2 className="card_total card_small">{data.recovered}</h2>
                 </div>
                </div>
            </li> <li className="card3">
                <div className="card_main">
                 <div className="card_inner">
<h1 className="card_name"><span>total</span>Confirmed</h1>
<h2 className="card_total card_small">{data.confirmed}</h2>
                 </div>
                </div>
            </li> <li className="card4">
                <div className="card_main">
                 <div className="card_inner">
<h1 className="card_name"><span>total</span>Death</h1>
<h2 className="card_total card_small">{data.deaths}</h2>
                 </div>
                </div>
            </li> <li className="card5">
                <div className="card_main">
                 <div className="card_inner">
<h1 className="card_name"><span>total</span>Active</h1>
<h2 className="card_total card_small">{data.active}</h2>
                 </div>
                </div>
            </li> <li className="card6">
                <div className="card_main">
                 <div className="card_inner">
<h1 className="card_name"><span>total</span>UPDATE</h1>
<h2 className="card_total card_small">{data.lastupdatedtime}</h2>
                 </div>
                </div>
            </li>
        </ul></section>
        </>
    )

}

export default Covid;