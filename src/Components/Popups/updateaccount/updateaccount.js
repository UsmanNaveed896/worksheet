import React from "react";
import './updateaccount.css'

export default () => {
    return (
        <>
            <div className="update-account container-fluid">
                <div className="account-title">
                    <h3>UPDATE ACCOUNT</h3>
                </div>
                <div className="account-form col-md-4 mt-4">
                    <div className="form-update">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" class="form-control"   placeholder="Enter Name" />
                        </div>
                        <div class="form-group mt-4">
                            <label for="exampleInputPassword1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group mt-4">
                            <label for="exampleInputEmail1">Role</label>
                            <input type="text" class="form-control"   placeholder="Enter Role" />
                        </div>
                        <div class="form-group mt-4">
                        <label for="exampleInputEmail1">Status</label>
                            <input type="text" class="form-control"   placeholder="Enter Status" />
                        </div>
                        <div className="update-account-btn">
                        <button type="submit" class="btn btn-primary mt-5">Submit</button>
                        <button type="close" class="btn btn-secondary mt-5 ">Cancel</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}