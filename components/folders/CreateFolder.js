import React, { useEffect, useState } from "react";
import Router from "next/router";
import Container from './../Container';
import {map} from "lodash";
export default function folder() {
  const user_id = typeof window !== 'undefined' ? localStorage.getItem('user_id') : null
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const [data, setData] = useState({
    name: "",
    user_id: user_id
  });
  const [folder, setFolder] = useState([{}]);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const sendData = async (e) => {
    e.preventDefault();
    const request = await fetch("http://localhost:8080/api/folder", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
  }






  useEffect(async () => {

    const request = await fetch("http://localhost:8080/api/folder/"+user_id, {
      method: "GET",
      headers: getHeaders()
    }
    );

    const folderS = await request.json();
console.log(folders);
    setFolder(folderS)
  }, [])


  function getHeaders() {
    return {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": token
    }
  }


   const deleteFolder = async (id)=> {
   

    const request = await fetch("http://localhost:8080/api/folder/" + id, {
      method: "DELETE",
      headers: getHeaders()
    });

    location.reload;
  }


  return (

    <div>


      <div class="container-fluid px-4">

        <div class="card mb-4">

          <div class="card-body">
            <table id="folders">
              <thead>
                <tr>
                  <th>Folder ID</th>
                  <th>User ID</th>
                  <th>Name Folder</th>
                  <th>Create At</th>
                </tr>
              </thead>

              <tbody>
                <ul className="list-group">
                  {folder && 
                map(folder, (e, index) => (
                    <tr key={index} onClick={() => Router.push(`/tasks/[folder_id]`, `/tasks/${e?.folder_id}`)}>
                      <td>{e?.folder_id}</td>
                      <td>{e?.user_id}</td>
                      <td>{e?.name}</td>
                      <td>{e?.create_at}</td>
                      <td><button onClick={deleteFolder(e?.folder_id)} class="btn btn-danger btn-circle btn-sm">
                        <i class="fas fa-trash"></i>
                      </button> </td>

                    </tr>
                  ))}
                </ul>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <form onSubmit={sendData}>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="name"
            onChange={handleChange}
          />
          <label htmlFor="inputName">Name </label>
        </div>
        <div className="mt-4 mb-0">
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">Create folder</button>
          </div>
        </div>
        <div className="mt-4 mb-0">
          <div className="d-grid">

          </div>
        </div>
      </form>
    </div>
  );
}