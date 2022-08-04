import React from 'react'
import '../Homepage/homepage.css'
export default () => {
    return (
        <>
            <div className=" dashboard-main container-fluid">
              <div className="page-title container"><h1>Dashboard</h1></div>  
                <div className="Employees-data row mt-5 justify-content-evenly ">
                    <div className="col-sm-12 col-md-6 col-lg-3 " style={{ "background-color": "white" }}>
                        <div className="employees row " >
                            <div className="user-icon" style={{ "width": "25%" }}>
                                <div className="icon"><span><i class="fa fa-user-circle mt-4"></i></span></div>
                            </div>
                            <div className="details-user mt-4 " style={{ "width": "75%" }}>
                                <h5 className="e" style={{ "border-bottom": "2px solid red" }}>Employees</h5>
                                <table style={{ "width": "100%" }}>
                                    <tbody>
                                        <tr>
                                            <td>Regular</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>Trainee</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3" style={{ "background-color": "white" }}>
                        <div className="employees row " >
                            <div className="clock-icon" style={{ "width": "25%" }}>
                                <div className="icon "><i class="fa fa-clock-o mt-4" aria-hidden="true"></i></div>
                            </div>
                            <div className="details-user mt-4 " style={{ "width": "75%" }}>
                                <h5 className="e" style={{ "border-bottom": "2px solid green" }}>ATTENDANCES</h5>
                                <table style={{ "width": "100%" }}>
                                    <tbody>
                                        <tr>
                                            <td>Online</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>Offline</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3" style={{ "background-color": "white" }}>
                        <div className="employees row " >
                            <div className="home-icon" style={{ "width": "25%" }}>
                                <div className="icon "><i class="fa fa-home fa-lg mt-4" aria-hidden="true"></i></div>
                            </div>
                            <div className="details-user mt-4 " style={{ "width": "75%" }}>
                                <h5 className="e" style={{ "border-bottom": "2px solid yellow" }}>LEAVES OF ABSENCE</h5>
                                <table style={{ "width": "100%" }}>
                                    <tbody>
                                        <tr>
                                            <td>Approved</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>Pending</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Employees Information */}
                <div className="employee-info-main mt-3">
                    <div className="information row justify-content-evenly">
                        <div className="col-sm-12 col-md-6 col-lg-3" style={{ "background-color": "white" }}>
                            <h5>Newest Employees</h5>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Start Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>GANDHI AKASH</td>
                                        <td>CTO</td>
                                        <td>June 01,2022</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3" style={{ "background-color": "white" }}>
                            <h5>Recent Attendances</h5>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3" style={{ "background-color": "white" }}>
                            <h5>Recent Leaves of Absence</h5>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}