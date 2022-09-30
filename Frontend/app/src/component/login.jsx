import React from "react";
import { useState } from "react";
import axios from "axios"
import styles from "./main.module.css"
import { useDispatch } from "react-redux";
import { user } from "../redux/action";

export const Login = ()=>{
    const [formData,setFormData] = useState({});
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        const {name,value} = e.target ;
        setFormData({
            ...formData,
            [name]:value
        })
    }
  const handleSubmit = (e)=>{
    e.preventDefault();
    
    axios.post('https://authcreatebackend.herokuapp.com/user/signin',formData).then(({data})=>{
        if(data.token){
            alert(data.message)
            localStorage.setItem("token",JSON.stringify(data.token))
            localStorage.setItem("mail",JSON.stringify(formData.email))
            dispatch(user(formData.email))
        }
    })
  }
    console.log(formData)
    return <div className={styles.login}>
             <h2>Signin</h2>
            <form onSubmit={handleSubmit}>

                <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
                <br/>
                <input type="text" name="password"placeholder="Password" onChange={handleChange}/>
                <br/>
                <input type="submit" />
            </form>
    </div>
}