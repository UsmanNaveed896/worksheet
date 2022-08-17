import React from "react";
import '../user-roles/userRoles.css'
import { Link } from 'react-router-dom';

export default () => {
    return (
        <>
            <div className="main-user container-fluid">
                <div className="page-title-main container">
                    <div className="head">
                        <div className="heading-title d-flex justify-content-between ">
                            <div className="mt-4"><h3>Attendances</h3></div>
                            <div className="return-btn mt-4 d-flex">

                                {/* Modal */}
                                <button type="button" class="btn btn-primary return-add" data-toggle="modal" style={{ 'padding': '0px 20px 0px 20px' }} data-target="#myModal"><i class="fa fa-plus" aria-hidden="true"></i> Manual Entry</button>
                                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="myModalLabel">Add Employee Attendance</h5>
                                            </div>
                                            <div class="modal-body ">
                                                <form>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlTextarea11">Employee</label>
                                                        <input type="text" class="form-control mt-2" id="exampleFormControlTextarea1" aria-describedby="emailHelp" placeholder="Enter Employee" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label className=" mt-2" for="exampleInputPassword1">Date</label>
                                                        <input type="number" class="form-control mt-1" id="exampleInputPassword1" placeholder="0000-00-00" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label className=" mt-2" for="exampleInputPassword1">Time In </label>
                                                        <input type="number" class="form-control mt-1" id="exampleInputPassword1" placeholder="Time In" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label className=" mt-2" for="exampleInputPassword1">Time Out</label>
                                                        <input type="number" class="form-control mt-1" id="exampleInputPassword1" placeholder="Time Out" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* MODAL ENDS */}

                                <Link to="/clock/" className="nav-link"> <button className="return-add " style={{ 'padding': '0px 20px 0px 20px' }}> <i class="fa fa-clock-o" aria-hidden="true"></i>View Web Clock</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="table-contents mt-5">
                        <table class="table table-hover table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Employee</th>
                                    <th scope="col">Time In</th>
                                    <th scope="col">Time Out</th>
                                    <th scope="col">Total Hours</th>
                                    <th scope="col">Status (In/Out)</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2022-08-12</td>
                                    <td>Demo,Manager</td>
                                    <td>09:00:00 AM</td>
                                    <td>05:00:00 PM</td>
                                    <td>8 Hours 0 mins</td>
                                    <td><span className="status-ok" style={{ "color": "blue" }}>OK/</span> <span style={{ "color": "green" }}>OK</span></td>
                                    <td className="icons-crud">
                                        <div className="float-right-icon">
                                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </div>
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