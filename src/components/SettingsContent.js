import React from 'react'
import "./Content.css"
import 'react-bootstrap'

function SettingsContent() {
    return (
        <div className="content">
             <div className="content__left">
                <div className="content__card">
                    <div style={{borderBottom:"1px solid orange", textAlign:"center"}}>
                        <em style={{}}>Minning Info</em>
                    </div>
                    <p>i am the content left</p>
                    <p>i am the content left</p>
                    <p>i am the content left</p>
                    <p>i am the content left</p>
                    <p>i am the content left</p>
                    <p>i am the content left</p>
                    <p>i am the content left</p>
                    <p>i am the content left</p>
                    <p>i am the content left</p>
                    <p>i am the content left</p>
                    <p>i am the content left</p>

                        
                </div>
            </div>


             <div className="content__right">

             <div className="row">
            
            <div className="col-lg-4 col-xlg-3 col-md-5">
                <div className="card">
                <h2 className="card-title text-center">$11,537 USD</h2>
                <div className="card-body"> 
                    <small className="text-muted">Username </small>
                    <h6> user.username </h6>
                    <small className="text-muted">Email Address </small>
                    <h6> user.email </h6> 
                    <small className="text-muted p-t-30 db">BTC Address</small>
                    <h6> user.profile.btc_address </h6>
                    <small className="text-muted">ETH Address </small>
                    <h6> user.profile.eth_address </h6>
                    <small className="text-muted">USDT(Tether) Address </small>
                    <h6> user.profile.usdt_address </h6>
                    <h6 className="text-muted">For Enquiries contact - <em className="text-danger">support@primeminners.co</em> </h6>
                </div>
                </div>
            </div>
            <div className="col-lg-8 col-xlg-9 col-md-7 ref">
                <div className="card">
                

                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#editprofile" role="tab" aria-controls="pills-timeline" aria-selected="true">Upload Details </a>
                    </li>
                </ul>
                

                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="editprofile" role="tabpanel" aria-labelledby="editprofile-tab">
                    <div className="card-body">
                        
                    </div>
                    </div>
                    <div className="tab-pane fade" id="changepassword" role="tabpanel" aria-labelledby="password-tab">
                    <div className="card-body">
                        <form action className="form-horizontal form-material" id="myform" method="POST" acceptCharset="utf-8">
                        <div className="form-group">
                            <label className="col-md-12">New Password</label>
                            <div className="col-md-12">
                            <input type="password" name="new_password" autoComplete="off" className="form-control form-control-line" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-12">Confirm New Password</label>
                            <div className="col-md-12">
                            <input type="password" name="confirm_newpassword" autoComplete="off" className="form-control form-control-line" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-12">Current Password</label>
                            <div className="col-md-12">
                            <input type="password" name="current_password" autoComplete="off" className="form-control form-control-line" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                            <button type="submit" name="update-password" className="btn btn-dark mx-auto text-uppercase">Update Password</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div> 
                    <div className="tab-pane fade" id="withdraw" role="tabpanel" aria-labelledby="withdraw-tab">
                    
                    </div>
                </div>
                </div>
            </div>
            </div>




            </div>


             </div>


        
    )
}

export default SettingsContent
