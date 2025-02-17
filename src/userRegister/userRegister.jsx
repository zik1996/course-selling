import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

export function UserRegister() {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            Name: "",
            Email: "",
            Password: ""
        },
        onSubmit: (user => {
            axios.post("http://localhost:4000/adduser", user)
            alert("User Registered Successfully")
            navigate("/userLogin")
        })
    })
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "545px" }}>
            <form onSubmit={formik.handleSubmit} className="p-3 border border-2 rounded rounded-2 py-4">
                <h1 className="text-primary"><span className="bi bi-person-fill"></span> Register User</h1>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Name" className="form-control" /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" onChange={formik.handleChange} name="Email" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="Password" className="form-control" /></dd>
                </dl>
                <button type="submit" className="btn btn-primary w-100">Register</button>
                <div className="mt-3">
                    have an account ?<Link to="/userLogin"> Login</Link>
                </div>
            </form>
        </div>
    )
}