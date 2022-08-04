import React from 'react'
import Img from '../../Assets/logo.png'
import './Navbar.css'
import { useState } from 'react';
export default () => {
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }
    return (
        <>
        <nav>
            <div className="container-fluid main">
                <div className="Navbar d-flex ">
                    <div className="dropdown-menu-a col-md-4">
                            <div className="brand d-flex mt-1">
                                <div className="mt-3"><h3>Menu</h3></div>
                                <div><button className="brand-button" onClick={openMenu}> &#9776; </button></div>
                         </div>
                        <div className="sidebar col-md-2">
                            <div className="close-button">
                                <img className="logo-img" src={Img} alt="logo" />
                                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                            </div>
                            <div className="sidebar-options">
                                <div className="signup-options">
                                    <ul>
                                        <li><i class="fa fa-sliders dropdown-icon" aria-hidden="true"></i>DASHBOARD</li>
                                        <li><i class="fa fa-users dropdown-icon" aria-hidden="true"></i>EMPLOYEES</li>
                                        <li><i class="fa fa-clock-o dropdown-icon" aria-hidden="true"></i>ATTENDANCES</li>
                                        <li><i class="fa fa-calendar dropdown-icon" aria-hidden="true"></i>SCHEDULES</li>
                                        <li><i class="fa fa-calendar-plus-o dropdown-icon" aria-hidden="true"></i>LEAVES</li>
                                        <li><i class="fa fa-bar-chart dropdown-icon" aria-hidden="true"></i>REPORTS</li>
                                        <li><i class="fa fa-user dropdown-icon" aria-hidden="true"></i>USERS</li>
                                        <li><i class="fa fa-cog dropdown-icon" aria-hidden="true"></i>SETTINGS</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                    </div>
                    <div className="login-info col-md-3 ">
                        <div className="login-access d-flex justify-content-end mt-3 ">
                        <div class="dropdown-En">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-flag" aria-hidden="true"></i> EN
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item">English</a></li>
                                    <li><a class="dropdown-item">Hindi</a></li>
                                    <li><a class="dropdown-item">French</a></li>
                                </ul>
                            </div>

                            <div class="dropdown-quickacess ">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-tint" aria-hidden="true"></i>   Quick access
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li class="dropdown-item"><i class="fa fa-clock-o dropdown-icon " aria-hidden="true"></i>Clock In/Out</li>
                                    <li class="dropdown-item"><i class="fa fa-user-plus dropdown-icon" aria-hidden="true"></i>New Employee</li>
                                    <li class="dropdown-item"><i class="fa fa-university dropdown-icon" aria-hidden="true"></i>Company</li>
                                    <li class="dropdown-item"><i class="fa fa-cubes dropdown-icon" aria-hidden="true"></i>Department</li>
                                    <li class="dropdown-item"><i class="fa fa-pencil dropdown-icon" aria-hidden="true"></i>Job Title</li>
                                    <li class="dropdown-item"><i class="fa fa-calendar dropdown-icon" aria-hidden="true"></i>Leave type</li>
                                </ul>
                            </div>

                            <div class="dropdown-user">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-user" aria-hidden="true"></i>  Gandhi Akash
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li class="dropdown-item"><i class="fa fa-user dropdown-icon " aria-hidden="true"></i>Update Account</li>
                                    <li class="dropdown-item"><i class="fa fa-lock dropdown-icon" aria-hidden="true"></i>Change Password</li>
                                    <li class="dropdown-item"><i class="fa fa-sign-in dropdown-icon" aria-hidden="true"></i>Switch to MyAccount</li>
                                    <li class="dropdown-item"><i class="fa fa-power-off dropdown-icon" aria-hidden="true"></i>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
        </>
    )
}