import React, { useEffect,useState } from 'react';
import '../login/login.css';
import Image from '../../Assets/logo.png';
import UserAuth from '../UserAuth';
import {postApiService} from '../../Services/index'

export default function Login () {
const {http,setToken}=UserAuth();

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleApi=(e)=>{
        e.preventDefault()
        http.get('/login/' ,{
            email :email,
            password:password
        }).then((res)=>{
            setToken(res.data)
            console.log(res,"toe")
        })
// }
 // let payLoad={
        //        email :email,
        //        password:password
        // }
        // postApiService('/login/' , payLoad)
        // .then((res)=>{
        //    setToken(res.data.token)
        //    console.log(res,"toe")
        // })
    
// const clickLogin=(e)=>{
//     e.preventDefault();
//     fetch("https://thetechgem.com/timeclock/api",{
//         method:"POST",
//         headers: {
//             'Content-type': 'application/json',
//         },
//          body: JSON.stringify({
//             email: 'myUserName',
//             password: 'myPassword',
//         })
        
//     })
//     .then(response => response.json())
    
//     .then((data) => {
        
// setToken(data)
// console.log(data,"")

//     })
    
 }




    return(
        <>
         <div class="container-fluid main">
        <div class='vertical-align-wrap '>
            <div class="  vertical-align-middle">
                <div class='auth-box mt-5 '>
                    <div className="content">
                      <div className="login-logo">
                        <img src={Image} alt="logo" />
                        <p className="leading mt-4" >Sign in to your account</p>
                      </div>  
                    <form >  
                        <div class="form-group mt-5">
                            <label for="email_input" className="labels">Email</label>
                            <input type="email" id="email" className="form-control form-control-lg"  placeholder="Enter your e-mail address"
                                name="email" value={email} onChange={handleEmail}/>
                        </div>
                        <div class="form-group mt-4">
                            <label className="labels">Password</label>
                            <input type="password" class="form-control form-control-lg" required placeholder="Enter your password"
                                name="password" value={password} onChange={handlePassword}/>
                        </div>
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                <label>Remember me?</label>
                            </label>
                        </div>
                        <button type="submit" class="btn btn-danger" onClick={handleApi}>Login</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
    }