import React from 'react'
import "./Content.css"
import 'react-bootstrap'


function InvestmentContent() {
    return (
        <div>
            <div className="alert alert-primary alert-dismissible fade show container-fluid" role="alert"><em><strong>To View Investments</strong></em>
            <p><strong>Deposit funds into your account and select a minning plan </strong></p>
            <button className="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>

            <div className="content">
            
            <div className="content__left">
                <div className="content__card">
                    <div style={{borderBottom:"1px solid orange", textAlign:"center"}}>
                        <em >Minning Info</em>
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
            <div className="col-sm-12 col-lg-12">
                <div className="card">
                <div className="card-body">
                    <div className="d-md-flex align-items-center">
                    <div>
                        <h3 className="card-title"><em>No Active Investment</em></h3>
                    </div>
                    <div className="ml-auto">
                        <div className="dl">
                        <form className="m-t-20" action method="get">
                            <div className="input-group mb-3">
                            <input type="text" name="search" className="form-control" placeholder="Enter transaction id" aria-label aria-describedby="basic-addon1" />
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            </div>
        </div>

            


        </div>
    )
}

export default InvestmentContent
