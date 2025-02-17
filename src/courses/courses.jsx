import { useEffect, useState } from "react"
import "./courses.css"
import axios from "axios"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export function Courses() {

    const [courses, setCourses] = useState([{ image: '', title: '', instructor: '', duration: '', price: 0 }])
    const [cookies, setCookie, removeCookie] = useCookies("username")

    const navigate = useNavigate();
    function LoadCourses() {
        axios.get("http://localhost:4000/courses")
            .then(res => {
                console.log(res.data)
                setCourses(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        if (cookies["username"] === undefined) {
            navigate("/userLogin")
        } else {
            LoadCourses();
        }
    }, [])
    return (
        <div className="mt-4" style={{ height: "100vh" }}>
            <h1 className="text-center course-heading text-primary">Available Courses</h1>
            <div className="d-flex justify-content-center">
                {
                    courses.map(course =>
                        <div key={course.title} className="card m-4 p-2" style={{ width: "300px", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                            <img className="rounded rounded-2" src={course.imageUrl} alt="banner img" height="150px" />

                            <div className="card-body text-center">
                                <h5 className="fw-bold">{course.title}</h5>
                                <p>Instructor - <span>{course.instructor}</span></p>
                                <p>Duration - <span>{course.duration}</span></p>
                                <p>Price - {(course.price).toLocaleString("en-IN", { style: "currency", currency: "INR" })}</p>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-primary w-100">Get Started</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}