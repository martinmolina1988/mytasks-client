import React from 'react'
import Container from '../components/Container'

export default function Login() {


    
    return (
        <Container title="login">
    
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header"><h3 className="text-center font-weight-light my-4">Log in</h3></div>
              <div className="card-body">
                <form>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="txtEmail" type="email" placeholder="email" />
                    <label htmlFor="inputEmail">Email address </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="txtPassword" type="password" placeholder="Password" />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <a onClick={login()} className="btn btn-primary" href="#">Log in</a>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center py-3">
                <div className="small"><a href="register.html">Do you need an account? Sign up!</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Container>
    )
}
