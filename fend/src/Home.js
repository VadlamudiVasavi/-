import axios from 'axios'
import React, { useState } from 'react'

const Home = () => {
    let [hno,setHno]=useState()
    let [data,setData]=useState({})
    let [err,setErr]=useState()
    let fun=(e)=>{
        setHno(e.target.value)
    }
    let getres=()=>{

        axios.get(`http://localhost:5000/getbyhno/${hno}`).then((res)=>{
            if(res.data.err==undefined)
            {
                setErr("")
                setData(res.data)

            }
            else{
                setErr(res.data.err)
            }
        })
    }
  return (
    <div>
        <div>
        <input type='text' placeholder='Enter HNO' onChange={fun} value={hno}/>
        <button onClick={getres}>GetRes</button>
       {err!=""&& <h1 style={{"color":"red"}}>{err}</h1>}
      </div>
     {err==""&&<div>
        <table>
            <tr><th>Name:</th><td>{data.name}</td></tr>
            <tr><th>HNO:</th><td>{data._id}</td></tr>
            <tr><th>DOB:</th><td>{new Date(data.dob).toLocaleDateString()}</td></tr>
            <tr><th>Gen:</th><td>{data.gen}</td></tr>
            <tr><th>Sub1:</th><td>{data.sub1}</td></tr>
            <tr><th>Sub2:</th><td>{data.sub2}</td></tr>
            <tr><th>Sub3:</th><td>{data.sub3}</td></tr>
            <tr><th>Sub4:</th><td>{data.sub4}</td></tr>
            <tr><th>Sub5:</th><td>{data.sub5}</td></tr>
            <tr><th>Sub6:</th><td>{data.sub6}</td></tr>
            <tr><th>Total</th><td>{data.sub1+data.sub2+data.sub3+data.sub4+data.sub5+data.sub6}</td></tr>
        </table>
        
      </div>}
    </div>
  )
}

export default Home