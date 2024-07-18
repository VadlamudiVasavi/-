import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import Gc from './Gc'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Addres = () => {
    let obj=useContext(Gc)
    let navigate=useNavigate()
    let [data,setData]=useState({})
    let [err,setErr]=useState("")
    let fun=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
      axios.post("http://localhost:5000/addres",data,{"headers":{"Authorization":obj.data.token}}).then((res)=>{
        if(res.data.err==undefined)
        {
          navigate("/admin/disp")
        }
        else
        {
          setErr(res.data.err)
        }

      })
    }
    useEffect(()=>{
        if(obj.data.token=="")
        {
            navigate("/admin")
        }

    },[])
  return (
    <div>
        <Nav/>
        <div className='regform'>
          <h2 style={{"color":"red"}}>{err}</h2>
          <input type='text' name="_id" onChange={fun}/>
          <input type='text' name="name" onChange={fun}/>
          <input type='date' name="dob" onChange={fun}/>
          <input type='radio' name="gen" value="male" onChange={fun}/>
          <input type='radio' name="gen" value="female" onChange={fun}/>
          <input type='text' name="sub1" onChange={fun}/>
          <input type='text' name="sub2" onChange={fun}/>
          <input type='text' name="sub3" onChange={fun}/>
          <input type='text' name="sub4" onChange={fun}/>
          <input type='text' name="sub5" onChange={fun}/>
          <input type='text' name="sub6" onChange={fun}/>
          <button onClick={add}>Addres</button>

        </div>
        </div>
  )
}

export default Addres