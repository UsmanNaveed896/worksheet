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
                  <label  className=" mt-2" for="exampleInputPassword1">Time Out</label>
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


    </>
  )
}