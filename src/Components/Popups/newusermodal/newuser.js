import React, { useState } from 'react'
import '../Attendance-modal/attendance.css'
export default () => {
    const [show, setShow] = useState(false);

    const openModal = () => {
        setShow(true)
    }
    return (
        <>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Launch demo modal
            </button>
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
                            <label  className=" mt-2" for="exampleInputEmail1">Current Password</label>
                            <input type="password" class="form-control mt-2"   placeholder="Enter Current Password" />
                        </div>
                        <div class="form-group mt-3">
                            <label  className=" mt-2" for="exampleInputEmail1">Confirm Password</label>
                            <input type="password" class="form-control mt-2 " style={{ "margin-left": "3px" }}  placeholder="Enter Current Password" />
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


        </>
    )
}