import React from "react";
import '../updateaccount/updateaccount.css'

export default()=>{
    return(
        <>
        <div className="update-account container-fluid">
                <div className="account-title">
                    <h3>CHANGE PASSWORD</h3>
                </div>
                <div className="account-form col-md-4 mt-4">
                    <div className="form-update">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Current Password</label>
                            <input type="password" class="form-control"   placeholder="Enter Current Password" />
                        </div>
                        <div class="form-group mt-4">
                        <label for="exampleInputEmail1">New Password</label>
                            <input type="password" class="form-control"   placeholder="Enter New Password" />
                        </div>
                        <div class="form-group mt-4">
                        <label for="exampleInputEmail1">Confirm Password</label>
                            <input type="password" class="form-control"   placeholder="Confirm Password" />
                        </div>
                        <div className="update-account-btn">
                        <button type="submit" class="btn btn-primary mt-5">Update</button>
                        <button type="close" class="btn btn-secondary mt-5 ">Cancel</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}