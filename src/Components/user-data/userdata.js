import React from "react";
import { Link } from 'react-router-dom';
import '../user-roles/userRoles.css'
import '../Popups/Attendance-modal/attendance.css'
export default () => {
    return (
        <>
            <div className="main-user container-fluid">
                <div className="page-title-main container">
                    <div className="head">
                        <div className="heading-title d-flex justify-content-between ">
                            <div className="mt-4"><h3>USERS</h3></div>
                            <div className="return-btn mt-4 d-flex">
                            <Link to="/addroles/" className="nav-link">   <button className="return-add"> <i class="fa fa-user" aria-hidden="true"></i>Roles</button></Link>
                                {/* Modal */}
                                <button type="button" class="btn btn-primary return-add" data-toggle="modal" style={{ 'padding': '0px 20px 0px 20px' }} data-target="#myModal"><i class="fa fa-plus" aria-hidden="true"></i> Add</button></div>
                                <div class="modal fade " id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                    <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="myModalLabel">Add New User</h5>
                                            </div>
                                            <div class="modal-body ">
                                                <form>
                                                    <label className=" mt-2" for="Text">Employee</label>
                                                    <select class="selectpicker mt-2" title="Some placeholder text...">
                                                        <option data-hidden="true">Select Employee</option>
                                                        <option>First</option>
                                                        <option>Second</option>
                                                    </select>
                                                    <div class="form-group ">
                                                        <label class="mt-2" for="exampleInputPassword1 ">Email address</label>
                                                        <input type="email" class="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="mt-3 " style={{ "fontWeight": "bold" }}>Choose Account Type</label>
                                                        <div class="form-check mt-3">

                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                            <label class="form-check-label" for="flexRadioDefault1">
                                                                Employee
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                            <label class="form-check-label" for="flexRadioDefault2">
                                                                Admin
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <label className=" mt-2" for="Text">Status</label>
                                                    <select class="selectpicker mt-2" title="Some placeholder text...">
                                                        <option data-hidden="true">Select Status</option>
                                                        <option>First</option>
                                                        <option>Second</option>
                                                    </select>

                                                    <label className=" mt-2" for="Text">Role</label>
                                                    <select class="selectpicker mt-2" title="Some placeholder text...">
                                                        <option data-hidden="true">Select Role</option>
                                                        <option>First</option>
                                                        <option>Second</option>
                                                    </select>
                                                    <div className="pass-holder d-flex justify-content-space-evenly">
                                                        <div class="form-group mt-3">
                                                            <label className=" mt-2" for="exampleInputEmail1">Current Password</label>
                                                            <input type="password" class="form-control mt-2" placeholder="Enter Current Password" />
                                                        </div>
                                                        <div class="form-group mt-3">
                                                            <label className=" mt-2" for="exampleInputEmail1">Current Password</label>
                                                            <input type="password" class="form-control mt-2 " style={{ "margin-left": "3px" }} placeholder="Enter Current Password" />
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn-register-new" >Register</button>
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* MODAL ENDS */}
                            
                        </div>
                    </div>
                    <div className="table-contents table-responsive mt-5">
                        <table class="table  table-hover ">
                            <thead>
                                <tr>
                                    <th scope="col"> Name</th>
                                    <th scope="col" >Email</th>
                                    <th scope="col"> Role</th>
                                    <th scope="col"> Type</th>
                                    <th scope="col"> Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Demo Employee</td>
                                    <td>employee@example.com</td>
                                    <td>EMPLOYEE</td>
                                    <td>Employee</td>
                                    <td>Enabled</td>
                                    <td className="icons-crud">
                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}