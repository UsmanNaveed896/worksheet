import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser(){

const navigate=useNavigate();

const getToken=()=>{
    const tokenString=localStorage.getItem('token') ;
    const userToken=JSON.parse(tokenString);
    return userToken;
}

// const getUser=()=>{
//     const userString=localStorage.getItem('user');
//     const user_detail=JSON.parse(userString)
//     return user_detail;
// }
// const [user,setUser]=useState(getUser());
const [token,setToken]=useState(getToken());

const saveToken=(token)=>{
localStorage.setItem('token' , JSON.stringify(token));
// localStorage.setItem('user',JSON.stringify(user));

setToken(token);
// setUser(user)
navigate('/dashboard');
}

const logout=()=>{
    console.log("abc")
    localStorage.removeItem('token');
   
}
const http=axios.create({
    baseURL:"https://thetechgem.com/timeclock/api",
    headers:{
        "Content-type" : "application/json",
    }
});
    return{
       setToken:saveToken,
       token,
    //    user,
       getToken,
       http,
       logout
}
}