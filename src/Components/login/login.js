import React from 'react'
import '../login/login.css'
import Image from '../../Assets/logo.png'
export default ()=>{
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
                    <form>  
                        <div class="form-group mt-5">
                            <label className="labels">Email</label>
                            <input type="Email" class="form-control form-control-lg" placeholder="Enter your e-mail address"
                                name="Email" />
                        </div>
                        <div class="form-group mt-4">
                            <label className="labels">Password</label>
                            <input type="Password" class="form-control form-control-lg" placeholder="Enter your password"
                                name="Enter Your Password" />
                        </div>
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                <label>Remember me?</label>
                            </label>
                        </div>
                        <button type="submit" class="btn btn-danger">Login</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}