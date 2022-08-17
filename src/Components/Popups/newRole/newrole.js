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
                            <h5 class="modal-title" id="myModalLabel">Add New Role</h5>
                        </div>
                        <div class="modal-body ">
                            <form>                            
                                <div class="form-group ">
                                    <label class="mt-2" for="exampleInputPassword1 ">Role Name</label>
                                    <input type="text" class="form-control mt-1" i a placeholder="Enter Role Name" />
                                </div>
                                <label className=" mt-2" for="Text">Status</label>
                                <select class="selectpicker mt-2" title="Some placeholder text...">
                                    <option data-hidden="true">Select Status</option>
                                    <option>First</option>
                                    <option>Second</option>
                                </select>

                            </form>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn-register-new" >Save</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}