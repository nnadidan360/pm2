import React from 'react'
import "./Content.css"
import 'react-bootstrap'

function WithdrawContent() {
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
                <div className="col-sm-12 col-lg-5 ">
                    <div className="card">
                    <div className="card-header with-border">
                        <h3 className="card-title">Request New Withdrawal</h3>
                    </div>
                    <div className="card-body">
                        {/* form goes here  */}
                    </div>
                    </div>
                </div>


                <div className="col-sm-12 col-lg-7 ref ">
                    <div className="card">
                    <div className="card-header with-border">
                        <h3 className="card-title">Fees and Processing</h3>
                    </div>
                    <div className="card-body table-responsive">
                        <table className="table no-margin">
                        <tbody><tr>
                            <th style={{width: '20%'}} className="text-bold">Mode</th>
                            <th>Minimum</th>
                            <th>Fee</th>
                            <th>Processing time</th>
                            </tr>
                            <tr>
                            <td className="text-bold" style={{width: '20%'}}>Bitcoin</td>
                            <td>$1000 </td>
                            <td>$20</td>
                            <td>24 hours </td>
                            </tr>
                            <tr>
                            <td className="text-bold" style={{width: '20%'}}>Ethereum</td>
                            <td>$500 </td>
                            <td>$10</td>
                            <td>24 hours </td>
                            </tr>
                            <tr>
                            <td className="text-bold" style={{width: '20%'}}>Litecoin</td>
                            <td>$500 </td>
                            <td>$10</td>
                            <td>24 hours </td>
                            </tr>
                            <tr>
                            <td className="text-bold" style={{width: '20%'}}>Dash</td>
                            <td>$500 </td>
                            <td>$10</td>
                            <td>24 hours </td>
                            </tr>
                            <tr>
                            <td className="text-bold" style={{width: '20%'}}>DogeCoin</td>
                            <td>$500 </td>
                            <td>$10</td>
                            <td>24 hours </td>
                            </tr>
                            <tr>
                            <td className="text-bold" style={{width: '20%'}}>Z Cash</td>
                            <td>$500 </td>
                            <td>$10</td>
                            <td>24 hours </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>

                <div className="row">
                <div className="col-sm-12 col-lg-12 ref">
                    <div className="card">
                    <div className="card-body">
                        <div className="d-md-flex align-items-center">
                        <div>
                            <h4 className="card-title">Withdrawals</h4>
                        </div>
                        <div className="ml-auto">
                            <div className="dl">
                            </div>
                        </div>
                        </div>
                        <div className="table-responsive ">
                        <table className="table table-striped table-bordered no-margin">
                            <thead>
                            <tr className>
                                <th className="border-top-0">Trans ID</th>
                                <th className="text-center border-top-0">Amount</th>
                                <th className="text-center border-top-0">Mode</th>
                                <th className="text-center border-top-0">Details</th>
                                <th className="text-center border-top-0">Status</th>
                                <th className="text-center border-top-0">Date Created</th>
                                <th className="text-center border-top-0">Date Paid Out</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr><td className="text-center">No record found </td></tr>
                            </tbody>
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

export default WithdrawContent
