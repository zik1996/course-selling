import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function DeleteCourse() {

    const [courses, setCourses] = useState([{ courseId: 0, title: '', imageUrl: '', instructor: '', duration: '', price: '', CategoryId: 0 }])

    const navigate = useNavigate();
    const params = useParams();

    function LoadCourses() {
        axios.get(`http://localhost:4000/course/${params.id}`)
            .then(res => {
                console.log(res.data)
                setCourses(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function handleDeleteClick() {
        axios.delete(`http://localhost:4000/deletecourse/${params.id}`)
        alert("Course Deleted Successfully");
        navigate("/adminDashboard")
    }

    useEffect(() => {
        LoadCourses();
    }, [])

    return (
        <div style={{ height: "545px" }}>
            <div className="text-center d-flex justify-content-center align-items-center" style={{ height: "545px" }}>
                {
                    courses.map(course =>
                        <div className="card p-3 my-4" key={course.courseId} style={{ width: "500px" }}>
                            <div className="card-title">
                                <h4>{course.title}</h4>
                            </div>
                            <img src={course.imageUrl} alt="" width="100%" height="160" />
                            <div className="card-body">
                                <dl>
                                    <dt>Instructor</dt>
                                    <dd>{course.instructor}</dd>
                                    <dt>Price</dt>
                                    <dd>{course.price}</dd>
                                </dl>
                            </div>
                            <div className="card-footer">
                                <button onClick={handleDeleteClick} className="btn btn-danger">Delete</button>
                                <Link to="/adminDashboard" className="btn btn-dark ms-2">Cancel</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}