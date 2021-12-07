import React from 'react'
import './Header.css'
import 'react-bootstrap'
import { Link} from 'react-router-dom'


function Header() {	

    return (
        
        <div className="leg">
            <header class="header fixed-top smalex" style={{background:"#141414"}}>
                <nav class="navbar navbar-expand-lg navbar-light main-nav" >
                <div class="container-fluid">
                    <Link to="/">
                        <img src="pn.png" height="80px" alt=""/>
                    </Link>
                        
                        
                        
                
                    
                    <button class="navbar-toggler collapsed" data-toggle="collapse" data-target="#MainNav">
                        <span class="navbar-toggler-icon" style={{item:"#fff"}}></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="MainNav">
                        <ul class="navbar-nav mr-auto mt-sms-3">
                            <li class="nav-item">
                                <Link class="nav-link text-center" to="/" style={{color:"#fff"}}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  text-center" to="/about" style={{color:"#fff"}}>About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  text-center" to="/pricing" style={{color:"#fff"}}>Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  text-center" to="/affiliate" style={{color:"#fff"}}>Affiliate</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  text-center" to="/farm" style={{color:"#fff"}}>Mining Farm</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link  text-center" to="/investment" style={{color:"#fff"}}>Investment Plans</Link>
                            </li> */}
                        </ul>
                        
                        <ul class="navbar-nav navbar-nav--right ml-auto d-flex !important">
                            <li class="nav-item right-navi d-flex mr-2">
                                <Link to="/login" class="register nav-btn" style={{background:"#fd961a", textDecoration:"none"}}>Sign In</Link>
                            </li>
                            <li class="nav-item right-navi d-flex">
                                <Link to="/signup" class="register nav-btn" style={{background:"#fd961a", textDecoration:"none"}}>Register</Link>
                            </li>
                        </ul>
                        
                        
                            
                    </div>
                </div>
            </nav>
        
        </header>
        
        </div>
    )
}

export default Header
