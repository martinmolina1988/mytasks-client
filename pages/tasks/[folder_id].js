
import Container from "../../components/Container";
import {map} from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const User = ({ user }) => {

    const router = useRouter();
    const { folder_id } = router.query;
    

    const user_id = typeof window !== 'undefined' ? localStorage.getItem('user_id') : null
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    const [data, setData] = useState({
        name: "",
        folder_id: folder_id
    });
    const [tasks, setTasks] = useState({});
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const sendData = async (e) => {
        e.preventDefault();
        const request = await fetch("http://localhost:8080/api/createTask", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
    }






    useEffect(async() => {

        const request = await fetch("http://localhost:8080/api/task/" + folder_id, {
            method: "GET",
            headers: getHeaders()
        }
        );

        const task = await request.json();

        setTasks(task)
    }, [])

    function getHeaders() {
        return {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": token
        }
    }


    const deleteTask= async (id)=> {
      

        const request = await fetch("http://localhost:8080/api/task/" + id, {
            method: "DELETE",
            headers: getHeaders()
        });


        location.reload();
    }

    return (
        <Container title="Folder">


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
                                {map(tasks, (e, index) => (
                                        <tr key={index}>
                                            <td>{e?.folder_id}</td>
                                            <td>{e?.user_id}</td>
                                            <td>{e?.task_id}</td>
                                            <td>{e?.completed}</td>
                                            <td>{e?.description}</td>
                                            <td>{e?.create_at}</td>
                                            <td><button  onClick={()=>deleteTask(e?.task_id)} class="btn btn-danger btn-circle btn-sm">
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
        </Container>
    );
};



export default User;