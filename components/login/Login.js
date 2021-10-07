
import React, { useState } from 'react'
import { decodeToken } from '../../utils/token';
export default function Login(props) {
  const {setChangeLogin,changeLogin}=props;
    const [data, setData] = useState({
      email: '',
      password: ''
    });
  
    const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }
  
    const sendData = async (e) => {
      e.preventDefault();
      const request = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      const response = await request.text();
      console.log(data);
      if (response != "FAIL") {
        localStorage.token = response;
        const token = decodeToken(response);
        localStorage.email = token.sub;
        localStorage.user_id = token.jti;
       
         window.location.reload();
      }
    }
  
  
    return (
     
  
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header"><h3 className="text-center font-weight-light my-4">Log in</h3></div>
                <div className="card-body">
                  <form onSubmit={sendData}>
                    <div className="form-floating mb-3">
                      <input className="form-control"
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={handleChange}
                      />
                      <label htmlFor="inputEmail">Email address </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input className="form-control"
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <button className="btn btn-primary" type="submit">Log in</button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center py-3">
                  <div className="small"><a onClick={()=>setChangeLogin(!changeLogin)}>Do you need an account? Sign up!</a></div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
    
    )
  }
  