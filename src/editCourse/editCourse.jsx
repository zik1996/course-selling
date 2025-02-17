import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function EditCourse() {
    const [categories, setCategories] = useState([{ CategoryId: 0, CategoryName: '' }])
    const [courses, setCourses] = useState([{ courseId: 0, title: '', imageUrl: '', instructor: '', duration: '', price: '', CategoryId: 0 }])

    const navigate = useNavigate();
    const params = useParams();

    function LoadCategories() {
        axios.get(`http://localhost:4000/categories`)
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

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
        LoadCategories();
        LoadCourses();
    }, [])

    const formik = useFormik({
        initialValues: {
            courseId: courses[0].courseId,
            title: courses[0].title,
            imageUrl: courses[0].imageUrl,
            instructor: courses[0].instructor,
            duration: courses[0].duration,
            price: courses[0].price,
            CategoryId: courses[0].CategoryId
        },
        enableReinitialize: true,

        onSubmit: (data) => {
            axios.put(`http://localhost:4000/editcourse/${params.id}`, data)
            alert("Course Updated Successfully");
            navigate("/adminDashboard")
        }
    })
    return (
        <div className="m-4">
            <form onSubmit={formik.handleSubmit} className="p-4 w-50 bg-light" style={{ boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                <h2>Edit Course</h2>
                <dl>
                    <dt>CourseId</dt>
                    <dd><input type="text" value={formik.values.courseId} name="courseId" className="form-control" onChange={formik.handleChange} /></dd>
                    <dt>Title</dt>
                    <dd><input type="text" value={formik.values.title} name="title" className="form-control" onChange={formik.handleChange} /></dd>
                    <dt>ImageUrl</dt>
                    <dd><input type="text" value={formik.values.imageUrl} name="imageUrl" className="form-control" onChange={formik.handleChange} /></dd>
                    <dt>Instructor</dt>
                    <dd><input type="text" value={formik.values.instructor} name="instructor" className="form-control" onChange={formik.handleChange} /></dd>
                    <dt>Duration</dt>
                    <dd><input type="text" value={formik.values.duration} name="duration" className="form-control" onChange={formik.handleChange} /></dd>
                    <dt>Price</dt>
                    <dd><input type="text" value={formik.values.price} name="price" className="form-control" onChange={formik.handleChange} /></dd>
                    <dt>Category</dt>
                    <dd>
                        <select value={formik.values.CategoryId} name="CategoryId" className="form-select" onChange={formik.handleChange}>
                            {
                                categories.map(category =>
                                    <option value={category.CategoryId} key={category.CategoryId}>{category.CategoryName}</option>
                                )
                            }
                        </select>
                    </dd>
                </dl>
                <button type="submit" className="btn btn-success">Save</button>
                <Link to="/adminDashboard" className="btn btn-danger ms-2">Cancel</Link>
            </form>
        </div>
    )
}