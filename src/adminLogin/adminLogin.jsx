import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function AdminLogin() {
    const [adminUsers, setAdminUsers] = useState([{ AdminName: "", AdminEmail: "", Password: "" }])
    const [cookies, setCookie, removeCookie] = useCookies("username")
    const [error, setError] = useState("")

    const navigate = useNavigate();
    function LoadAdminUser() {
        axios.get("http://localhost:4000/admin")
            .then(res => {
                console.log(res.data)
                setAdminUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        LoadAdminUser();
    }, [])

    const formik = useFormik({
        initialValues: {
            AdminName: "",
            AdminName: '',
            Password: ''
        },
        onSubmit: (values) => {
            let user = adminUsers.find(item => item.Email === values.Email)
            if (user && user.Password === values.Password) {
                alert("You have successfully login");
                // setCookie("username", user.Name)
                // navigate("/courses")
                setCookie("username", user.AdminName, { path: "/" })
                setTimeout(() => {
                    navigate("/adminDashboard")
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
                <h1><span className="bi bi-person-fill"></span> Admin Login</h1>
                <dl>
                    <dt>Email</dt>
                    <dd><input type="email" onChange={formik.handleChange} name="AdminEmail" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="Password" className="form-control" /></dd>
                </dl>
                <div>
                    <button className="btn btn-primary" type="submit">Login</button>
                    <Link to="/" className="btn btn-danger ms-2">Cancel</Link>
                </div>
                <div className="text-center">
                    <span className="text-danger h5">{error}</span>
                </div>
            </form>
        </div>
    )
}