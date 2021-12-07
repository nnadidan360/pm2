import React from 'react'
import "./Content.css"
import 'react-bootstrap'


function EarningContent() {
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
                <div className="col-sm-12 col-lg-12">
                    <div className="card">
                    <div className="card-body">
                        <div className="d-md-flex align-items-center">
                        <div>
                            <h4 className="card-title">Total Earnings</h4>
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
                        <div className="table-responsive ">
                        <table className="table table-striped table-bordered no-margin">
                            <thead>
                            <tr className>
                                <th className="border-top-0">Trans ID</th>
                                <th className="text-center border-top-0">Amount Earned(USD)</th>
                                <th className="text-center border-top-0">Crypto</th>
                                <th className="text-center border-top-0">Balance</th>
                                <th className="text-center border-top-0">Date Received</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr><td className="text-center">No record found 
                                {/* <a class="pl-3" href="">View all</a> */}
                                </td></tr>                                      </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                
             </div>

        </div>
    )
}

export default EarningContent
