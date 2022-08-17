import React from "react";
import '../user-roles/userRoles.css'


export default () => {
    return (
        <>
            <div className="main-user container-fluid">
                <div className="page-title-main container">
                    <div className="head">
                        <div className="heading-title d-flex justify-content-between ">
                            <div className="mt-4"><h3>USER ACCOUNTS REPORT</h3></div>
                            <div className="return-btn mt-4">
                                <button className="return-add"> <i class="fa fa-angle-left" aria-hidden="true"></i>Return</button>
                                <button className="return-add " style={{ 'padding': '0px 20px 0px 20px' }}> <i class="fa fa-download" aria-hidden="true"></i>Export to CSV</button>
                            </div>
                        </div>
                    </div>
                    <div className="table-contents table-responsive mt-5">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Account Type</th>
                                    <th scope="col">Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Demo Employee</td>
                                    <td>employee@example</td>
                                    <td>Employee</td>
                                    <td>Active</td>                                     
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}