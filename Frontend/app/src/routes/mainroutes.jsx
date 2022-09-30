import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../component/login";
import { Navbar } from "../component/navbar";
import { Profile } from "../component/profile";
import { Signup } from "../component/signup";

export const Mainroutes = ()=>{
    return <div>
        <Navbar/>
        <Routes>
            <Route path={"/"} element={<Signup/>}/>
            <Route path={"/singin"} element={<Login/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
        </Routes>
    </div>
}