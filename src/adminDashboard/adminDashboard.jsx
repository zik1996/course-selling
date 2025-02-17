import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function AdminDashboard() {
    const [courses, setCourses] = useState([{ courseId: 0, title: '', imageUrl: '', instructor: '', duration: '', price: '', CategoryId: 0 }])

    function LoadCourses() {
        axios.get(`http://localhost:4000/courses`)
            .then(res => {
                setCourses(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        LoadCourses();
    }, [])
    return (
        <div>
            <h1 className="text-info">Admin Dashboard</h1>
            <div>
                <Link to="/addCourse" className="btn btn-primary m-4">Add Course <span className="bi bi-file"></span></Link>
            </div>
            <div>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Preview</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map(course =>
                                <tr key={course.courseId}>
                                    <td>{course.title}</td>
                                    <td>
                                        <img src={course.imageUrl} alt="" width="300" height="150" />
                                    </td>
                                    <td>
                                        <Link to={`/editCourse/${course.courseId}`} className="btn btn-warning"><span className="bi bi-pen-fill"></span></Link>
                                        <Link to={`/deleteCourse/${course.courseId}`} className="btn btn-danger ms-2"><span className="bi bi-trash-fill"></span></Link>
                                        <Link to={`/courseDetails/${course.courseId}`} className="btn btn-info ms-2"><span className="bi bi-eye-fill"></span></Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}