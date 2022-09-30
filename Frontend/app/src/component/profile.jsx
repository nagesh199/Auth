import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./main.module.css"

export const Profile = ()=>{
    const navigate = useNavigate()
    const email1 = useSelector((store)=>store.USER_DATA);
    const [data,setData] = useState([])
    console.log(email1.payload)
    const token = JSON.parse(localStorage.getItem("token"));
    const email = JSON.parse(localStorage.getItem("mail"));
    

    useEffect(()=>{
       getData()
    },[])
    const getData = ()=>{
        axios.get(`https://authcreatebackend.herokuapp.com/user/profile/${email}`,
        { headers: {"Authorization" : `Bearer ${token}`} }).then(({data})=>{
            setData(data)
        })
    }
    const handleClick =()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('mail');
        navigate("/singin")
    }
    return <div className={styles.profile_main}>
           <div>
                {data.map(el=>{
                    
                    return <div className={styles.profile}>
                            <img width="100px" src={`https://authcreatebackend.herokuapp.com/static/${el.profile}`}/>
                            <h4>Name:{el.name}</h4>
                            <p>Email:{el.email}</p>
                        </div>
                })}
           </div>
           <div>
             <button onClick={handleClick}>LogOut</button>
           </div>
    </div>
}