import React, {useEffect, useState} from 'react'
import Nav from './Nav'
import Gc from './Gc'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import axios from 'axios'

const DisRes = () => {
    let obj=useContext(Gc)
    let navigate=useNavigate()
    let [data,setData]=useState([])
    let apidata=()=>{
        axios.get("http://localhost:5000/getres",{"headers":{"Authorization":obj.data.token}}).then((res)=>{
            setData(res.data)
        })
    }
    let edit=(item)=>{
        obj.fun({...obj.data,"item":item})
        navigate("/admin/update")

    }
    useEffect(()=>{
        if(obj.data.token=="")
        {
            navigate("/admin")
        }
        else{
           apidata()
        }

    },[])
    let del=(hno)=>{
        let f=window.confirm("are you sure?")
        if(f)
        {
        axios.delete(`http://localhost:5000/del/${hno}`,{"headers":{"Authorization":obj.data.token}}).then(()=>{
            apidata()

        })
    }
    }
  return (
    <div>
            <Nav/>

            <table>
                <tr><th>Hno</th><th>Name</th><th>DOB</th><th>Gen</th><th>Sub1</th><th>Sub2</th><th>Sub3</th><th>Sub4</th><th>Sub5</th><th>Sub6</th></tr>
                {
                    data.map((item)=>{
                        return(<tr>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{new Date(item.dob).toLocaleDateString()}</td>
                            <td>{item.gen}</td>
                            <td>{item.sub1}</td>
                            <td>{item.sub2}</td>
                            <td>{item.sub3}</td>
                            <td>{item.sub4}</td>
                            <td>{item.sub5}</td>
                            <td>{item.sub6}</td>
                            <td><button onClick={()=>edit(item)}>Edit</button></td>
                            <td><button onClick={()=>del(item._id)}>Delete</button></td>
                        </tr>)
                    })
                }
            </table>
        </div>
  )
}

export default DisRes