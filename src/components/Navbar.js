import React, { useState } from 'react';
import Menu from "@material-ui/icons/Menu"
import Cancel from "@material-ui/icons/Cancel"
import AccountCircle from "@material-ui/icons/AccountCircle"
import { Link } from 'react-router-dom';
import './Navbar.css';
import { SidebarData } from './SidebarData';



function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      
        <div className='headbar'>
        <img src="../pn.png" height="130px" alt="" style={{marginTop:"50px"}}/>
          
        </div>
        <div style={{backgroundColor:"white", height:"2px"}}>
        </div>
        <div className='visualbar'>
          <Link to='#' className='menu-bars'>
              <Menu onClick={showSidebar} />
          </Link>
          <Link to='/setting' className='menu-bars' style={{marginRight:"30px", textDecoration:"none"}}>
              <AccountCircle />
          <small style={{fontWeight:"600", fontSize:"small"}}>welcome username</small>

          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className="navbarshift">
              <img src="../pn.png" height="130px" alt="" />
            </li>
            <li className='navbar-toggle'>
              <Link to='#' className='red-bar'>
                <Cancel size="large" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} className="nav-text" style={{textDecoration:"none"}}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  );
}

export default Navbar;
