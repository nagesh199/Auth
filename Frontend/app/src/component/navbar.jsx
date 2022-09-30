import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./main.module.css"
export const Navbar = ()=>{
    return <div>
        <div className={styles.navbar}>
            <NavLink className={styles.navlink} to={"/"} >Signup</NavLink>
            <NavLink className={styles.navlink} to={"/singin"}>Signin</NavLink>
            <NavLink className={styles.navlink} to={"/profile"}>Profile</NavLink>
        </div>
    </div>
}