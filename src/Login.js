import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
// import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const signIn = e => {
    //     e.preventDefault();

    //     auth
    //         .signInWithEmailAndPassword(email, password)
    //         .then(auth => {
    //             history.push('/home')
    //         })
    //         .catch(error => alert(error.message))
    // }
    

    

    return (
        <div>
  <div className="row justify-content-center" style={{marginTop:"150px", marginBottom:"30px", zIndex:"100"}}>
    <div className="col-md-8">
      <div className="card-group">
        <div className="card p-4">
          <div className="card-body">
            <h1>Login</h1>
            <p className="text-muted">
            </p>


            <form method="post" action>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <input type="text" placeholder="UserName" />
                </div>
                
              </div>
              
              <div className="input-group mb-4">
                <div className="input-group-prepend">
                  <input type="password" placeholder="password" />
                </div>
              </div>
             

              <div className="row">
                <div className="col-6">
                  <button type="submit" name="login" className="btn btn-warning px-4">Login</button>
                </div>
                </div>
            </form>


          </div>
        </div>
        <div className="card text-white bg-warning py-5 d-md-down-none" style={{width: '44%'}}>
          <div className="card-body text-center">
            <div>
              <h2>
                <a target="_blank" className="text-white" href="/">
                  <img src="pn.png" width="80px" height="60px" />
                </a>
              </h2>
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{borderRadius: 10, overflow: 'hidden'}}>
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to={1} className />
                  <li data-target="#carouselExampleIndicators" data-slide-to={2} className />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item">
                    <img alt src="20200426152751.jpg" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img alt src="202004161122391.jpg" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img alt src="202004161122392.jpg" className="d-block w-100" />
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

export default Login
