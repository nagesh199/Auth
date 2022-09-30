import React from "react";
import { useState } from "react";
import axios from "axios"
import { useRef } from "react";
import styles from "./main.module.css"
import { useNavigate } from "react-router-dom";


export const Signup = ()=>{
    const inputFile = useRef()
    const [formData,setFormData] = useState({});
    const navigate = useNavigate()
    

    const handleChange = (e)=>{
        const {name,value} = e.target ;
        setFormData({
            ...formData,
            [name]:value
        })
    }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name",formData.name)
    formdata.append("email",formData.email)
    formdata.append("password",formData.password)
    formdata.append("profile",inputFile.current.files[0])
    axios.post('http://localhost:8080/user/signup',formdata,{
        headers:{"Content-Type":"multipart/form-data"}
    })
    
    navigate("/singin")
  }
    console.log(formData)
    return <div className={styles.signup}>
        <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
              <br/>
              <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
              <br/>
              <input type="text" name="password"placeholder="Password" onChange={handleChange}/>
              <br/>
              <input style={{marginLeft:"80px"}} type="file" ref={inputFile}/>
              <br/>
              <input type="submit" />
          </form>
    </div>
}