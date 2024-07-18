import React, { useContext, useEffect, useState } from 'react'
import Gc from './Gc'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Update = () => {
    let [data,setData]=useState({})
    let obj=useContext(Gc)
    let navigate=useNavigate()
    useEffect(()=>{
        if(obj.data.token=="")
        {
            navigate("/admin")
        }
        else{

        setData(obj.data.item)
        }

    },[])
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
      }
      let update=()=>{
        axios.put("http://localhost:5000/update",data,{"headers":{"Authorization":obj.data.token}}).then(()=>{
            navigate("/admin/disp")

        })
      }
  return (
    <div>
         <input type='text' name="_id" onChange={fun} value={data._id} readOnly/>
          <input type='text' name="name" onChange={fun} value={data.name}/>
       {data.dob==undefined? <input type='date' name="dob" onChange={fun}/>  :<input type='date' name="dob" onChange={fun} value={data.dob.slice(0,10)}/>}
        { data.gen=='male'? <input type='radio' name="gen" value="male" onChange={fun} checked/>:<input type='radio' name="gen" value="male" onChange={fun}/>}
        {data.gen=='female'?  <input type='radio' name="gen" value="female" onChange={fun} checked/>:<input type='radio' name="gen" value="female" onChange={fun}/>}
          <input type='text' name="sub1" onChange={fun} value={data.sub1}/>
          <input type='text' name="sub2" onChange={fun} value={data.sub2}/>
          <input type='text' name="sub3" onChange={fun} value={data.sub3}/>
          <input type='text' name="sub4" onChange={fun} value={data.sub4}/>
          <input type='text' name="sub5" onChange={fun} value={data.sub5}/>
          <input type='text' name="sub6" onChange={fun} value={data.sub6}/>
          <button onClick={update}>Update</button>
        


    </div>
  )
}

export default Update