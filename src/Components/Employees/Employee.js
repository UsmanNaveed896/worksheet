import React from "react";
import '../user-roles/userRoles.css'


export default () => {
    return (
        <>
            <div className="main-user container-fluid">
                <div className="page-title-main container">
                    <div className="head">
                        <div className="heading-title d-flex justify-content-between ">
                            <div className="mt-4"><h3>EMPLOYEES</h3></div>
                            <div className="return-btn mt-4">
                                {/* <button className="return-add"> <i class="fa fa-angle-left" aria-hidden="true"></i>Return</button> */}
                                <button className="return-add " style={{ 'padding': '0px 20px 0px 20px' }}> <i class="fa fa-plus" aria-hidden="true"></i>Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="table-contents table-responsive mt-5">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Employee</th>
                                    <th scope="col">Company</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001133</td>
                                    <td>Employee Demo</td>
                                    <td></td>
                                    <td></td>  
                                    <td></td>  
                                    <td>Active</td>  
                                    <td className="icons-crud">
                                    <div className="float-right-icon">
                                        <i class="fa fa-list" aria-hidden="true"></i>
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