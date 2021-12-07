import React from 'react'
import "./Content.css"
import 'react-bootstrap'

function FundContent() {
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
                        <h3 className="card-title">Fund Account</h3>
                    </div>
                    <div className="card-body">
                        {/* form goes here */}
                    </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-7 ref ">
                    <div className="card">
                    <div className="card-body table-responsive">
                        <div>
                        <h3>Pay the sum of $ to</h3>
                        <pre style={{fontSize: '105%', lineHeight: '1.45', color: 'white', backgroundColor: 'rgb(99 111 131)', padding: 16, overflow: 'auto', borderRadius: 6}}> BTC <code style={{borderRadius: 6, color: 'white'}}> to 34WTzjzMeM4MCMfqbXr54GAzSRgGpe4UTu</code></pre>
                        <input id="foo" defaultValue="34WTzjzMeM4MCMfqbXr54GAzSRgGpe4UTu" />
                        <button className="btn btn-dark" data-clipboard-target="#foo">
                            Copy
                        </button>
                        <p>Please Ensure You pay only BTC(Bitcoin) to this address</p>
                        </div>

                        <div>
                        <h3>Pay the sum of $</h3>
                        <pre style={{fontSize: '105%', lineHeight: '1.45', backgroundColor: 'rgb(99 111 131)', padding: 16, overflow: 'auto', borderRadius: 6, color: 'white'}}> ETH <code style={{color: 'white', borderRadius: 6}}> to 0x4555Cf42dB55069DDA67CF262393048BF2CC13D1</code></pre>
                        <input id="foo" defaultValue="0x4555Cf42dB55069DDA67CF262393048BF2CC13D1" />
                        <button className="btn btn-dark" data-clipboard-target="#foo" data-container="body" data-trigger="focus" data-toggle="popover" data-placement="top" data-content="copied.">
                            copy
                        </button>
                        <p>Please Ensure You pay only ETH(Ethereum) to this address</p>
                        </div>

                        <div>
                        <h3>Pay the sum of $ to</h3>
                        <pre style={{fontSize: '105%', lineHeight: '1.45', backgroundColor: 'rgb(99 111 131)', padding: 16, overflow: 'auto', borderRadius: 6}}><code style={{color: 'white', borderRadius: 6}}>0x4555Cf42dB55069DDA67CF262393048BF2CC13D1</code></pre>
                        <input id="foo" defaultValue="0x4555Cf42dB55069DDA67CF262393048BF2CC13D1" />
                        <button className="btn btn-dark" data-clipboard-target="#foo">
                            Copy
                        </button>
                        <p>Please Ensure You pay only USDT(Tether) to this address</p>
                        </div>

                        <div>
                        <h3>Please Select an Amount and a method</h3>
                        </div>
                    </div>
                    </div>
                </div> 
                </div>

             </div>

            </div>
    )
}

export default FundContent
