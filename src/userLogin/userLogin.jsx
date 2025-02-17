import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function UserLogin() {
    const [users, setUser] = useState([{ Name: "", Email: "", Password: "" }])
    const [cookies, setCookie, removeCookie] = useCookies("username")
    const [error, setError] = useState("")

    const navigate = useNavigate();
    function LoadUsers() {
        axios.get("http://localhost:4000/users")
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        LoadUsers();
    }, [])

    const formik = useFormik({
        initialValues: {
            Name: "",
            Email: '',
            Password: ''
        },
        onSubmit: (values) => {
            let user = users.find(item => item.Email === values.Email)
            if (user && user.Password === values.Password) {
                alert("You have successfully login");
                // setCookie("username", user.Name)
                // navigate("/courses")
                setCookie("username", user.Name, { path: "/" })
                setTimeout(() => {
                    navigate("/courses")
                    window.location.reload();
                }, 100)
            } else {
                setError("Invalid Credential")
            }
        }
    })
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "545px" }}>
            <form onSubmit={formik.handleSubmit} className="p-3 border border-2 rounded rounded-2 py-4"  >
                <h1><span className="bi bi-person-fill"></span> User Login</h1>
                <dl>
                    <dt>Email</dt>
                    <dd><input type="email" onChange={formik.handleChange} name="Email" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="Password" className="form-control" /></dd>
                </dl>
                <button className="btn btn-primary w-100" type="submit">Login</button>
                <div className="mt-3">
                    Don't have an account ?<Link to="/userRegister"> Register</Link>
                </div>
                <div className="text-center">
                    <span className="text-danger h5">{error}</span>
                </div>
            </form>
        </div>
    )
}