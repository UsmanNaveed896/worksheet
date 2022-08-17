import React from "react";
import '../Add-job-title/addjob.css'
export default () => {
    return (
        <>
            <div className="main-user container-fluid">
                <div className="page-title-main container">
                    <div className="head">
                        <div className="heading-title d-flex justify-content-between ">
                            <div className="mt-4"><h3>ADD COMPANY</h3></div>
                            <div className="return-btn mt-4">
                                <button className="return-add"> <i class="fa fa-angle-left" aria-hidden="true"></i>Return</button>
                            </div>
                        </div>
                    </div>
                    <div className="add-job col-md-12 d-flex justify-content-space-evenly">
                        <div className="add-title col-md-4 mt-5">
                            <form>
                                <div class="form-group ">
                                    <label class="mt-3" for="exampleInputPassword1 ">Company Name</label>
                                    <input type="text" class="form-control mt-1" placeholder="Enter Department Name" />
                                </div>
                              <div className="save-btn"> <button type="button" class="btn-register-new mt-4" >Save</button></div> 
                                </form>
                        </div>
                    
                    <div className="table-contents col-md-7 mt-5">
                        <table class="table table-hover table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Job Title</th>
                                    <th scope="col">Department</th>

                                </tr>
                            </thead>
                            <tbody>
                                <div className="no-data">
                                No data available in table
                                    {/* <td></td> */}
                                    
                                </div>
                            </tbody>
                        </table>
                       
                    </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}