import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import '../user-roles/userRoles.css'


const Home = () => {
let navigate=useNavigate();
const[users,setUsers]=useState([])


useEffect(()=>{
loadUsers();
},[])
const loadUsers= async ()=>{
   const result=await axios.get("https://dummyjson.com/products/add")
    setUsers(result.data)
}


const[addUser,setaddUser]=useState({
    name:"",
    job:"",
    id:"",
});
const oninputChange=(e)=>{
    setaddUser({ [e.target.name]:[e.target.value]})
}
const onSubmit=async e=>{
    e.preventDefault()
    await axios.post ('https://dummyjson.com/products/add' ,addUser).then ((res)=>{
        console.log(res,"ff")
    })
    navigate('/addroles/')
}
const{name,job,id}=addUser;
    return (
        <>
            <div className="main-user container-fluid">
                <div className="page-title-main container">
                    <div className="head">
                        <div className="heading-title d-flex justify-content-between ">
                            <div className="mt-4"><h3>USER ROLES</h3></div>
                            <div className="return-btn mt-4">
                                <button className="return-add"> <i class="fa fa-angle-left" aria-hidden="true"></i>Return</button>

                                {/* Modal */}
                                <button type="button" class="btn btn-primary return-add" data-toggle="modal" style={{ 'padding': '0px 20px 0px 20px' }} data-target="#myModal"><i class="fa fa-plus" aria-hidden="true"></i> Add</button></div>
                            <div class="modal fade " id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="myModalLabel">Add New Role</h5>
                                        </div>
                                        <div class="modal-body ">
                                            <form >
                                                <div class="form-group ">
                                                    <label class="mt-2" for="exampleInputPassword1 ">Role Name</label>
                                                    <input type="text" class="form-control mt-1" i a placeholder="Enter Role Name" value={name} onChange={e=>oninputChange(e)} />
                                                </div>
                                                <label className=" mt-2" for="Text">Status</label>
                                                <input type="text" class="form-control mt-1" i a placeholder="Enter status Name" value={job} onChange={e=>oninputChange(e)} />
                                                {/* <select class="selectpicker mt-2" title="Some placeholder text...">
                                                    <option data-hidden="true">Select Status</option>
                                                    <option >First</option>
                                                    <option>Second</option>
                                                </select> */}

                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn-register-new" onClick={e=>onSubmit(e)} >Save</button>
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                
                <div className="table-contents mt-5">
                    <table class="table table-hover table-responsive table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Roll Name</th>
                                <th scope="col">Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user , index)=>(  
                            <tr>
                        
                                <td>{user.name}</td>
                                <td>{user.job}</td>
                                <td className="icons-crud">
                                    <div className="float-right-icon">
                                        <i class="fa fa-list" aria-hidden="true"></i>
                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                    </div>
                                </td>
                            </tr>
                                 ) )                               
                            }
                            <tr>
                                <td>Manager</td>
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
export default Home;