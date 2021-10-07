import React, { useState } from 'react'

export default function Register(props) {

  const {setChangeLogin,changeLogin}=props;
    const [data, setData] = useState({
        email: '',
        password: '',
        repeatPassword: ''
      });
    
      const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        })
      }
    
      const sendData = async (e) => {
        e.preventDefault();
        const request = await fetch("http://localhost:8080/api/registrar", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        });
        const response = await request.text();
        console.log(response);
        console.log("Data: "+data);
       
      }
    

    return (
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header"><h3 className="text-center font-weight-light my-4">Crear Cuenta</h3></div>
              <div className="card-body">
                <form onSubmit={sendData}>
                  <div className="form-floating mb-3">
                    <input className="form-control" 
                    name="email"
                    type="email" 
                    placeholder="name@example.com"
                    onChange={handleChange}
                     />
                    <label htmlFor="inputEmail">Email </label>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input 
                        className="form-control" 
                        name="password" 
                        type="password" 
                        placeholder="Create a password"
                        onChange={handleChange}
                         />
                        <label htmlFor="inputPassword">Password</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input 
                        className="form-control" 
                        name="repeatPassword" 
                        type="password" 
                        placeholder="Confirm password" 
                        onChange={handleChange}
                        />
                        <label htmlFor="inputPasswordConfirm">Confirm password</label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 mb-0">
                    <div className="d-grid">  <button className="btn btn-primary" type="submit">Create  account</button></div>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center py-3">
                <div className="small"><a  onClick={()=>setChangeLogin(!changeLogin)}>¿Tenés una cuenta? Logueate!</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
