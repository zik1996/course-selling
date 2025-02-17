import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

export function CourseDetails() {
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

    useEffect(() => {
        LoadCourses();
    }, [])
    return (
        <div className="d-flex justify-content-center text-center">
            {
                courses.map(course =>
                    <div className="card p-3 my-4" key={course.courseId} style={{ width: "500px" }}>
                        <div className="card-title">
                            <h4>{course.title}</h4>
                            <p>Category ID - <span>{course.CategoryId}</span></p>
                        </div>
                        <img src={course.imageUrl} alt="" width="100%" height="160" />
                        <div className="card-body">
                            <dl>
                                <dt>Instructor</dt>
                                <dd>{course.instructor}</dd>
                                <dt>Duration</dt>
                                <dd>{course.duration}</dd>
                                <dt>Price</dt>
                                <dd>{course.price}</dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary">Buy</button>
                            <Link to="/adminDashboard" className="btn btn-danger ms-2">Cancel</Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}