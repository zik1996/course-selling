import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function AddCourse() {
    const [categories, setCategories] = useState([{ CategoryId: 0, CategoryName: '' }])

    const navigate = useNavigate();
    function LoadCategories() {
        axios.get(`http://localhost:4000/categories`)
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        LoadCategories();
    }, [])

    const formik = useFormik({
        initialValues: {
            courseId: 0,
            title: '',
            imageUrl: '',
            instructor: '',
            duration: '',
            price: '',
            CategoryId: 0
        },

        onSubmit: (data) => {
            axios.post(`http://localhost:4000/addcourse`, data)
            alert("New Course Added Successfully");
            navigate("/adminDashboard")
        }
    })
    return (
        <div className="m-4">
            <form onSubmit={formik.handleSubmit} className="p-4 w-50 bg-light" style={{ boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                <h2>Add New Course</h2>
                <dl>
                    <dt>CourseId</dt>
                    <dd><input type="text" name="courseId" className="form-control" onChange={formik.handleChange} /></dd>
                    <dt>Title</dt>
                    <dd><input type="text" name="title" className="form-control" onChange={formik.handleChange} /></dd>
                    <dt>ImageUrl</dt>
                    <dd><input type="text" name="imageUrl" className="form-control" onChange={formik.handleChange} /></dd>
                    <dt>Instructor</dt>
                    <dd><input type="text" name="instructor" className="form-control" onChange={formik.handleChange} /></dd>
                    <dt>Duration</dt>
                    <dd><input type="text" name="duration" className="form-control" onChange={formik.handleChange} /></dd>
                    <dt>Price</dt>
                    <dd><input type="text" name="price" className="form-control" onChange={formik.handleChange} /></dd>
                    <dt>Category</dt>
                    <dd>
                        <select name="CategoryId" className="form-select" onChange={formik.handleChange}>
                            {
                                categories.map(category =>
                                    <option value={category.CategoryId} key={category.CategoryId}>{category.CategoryName}</option>
                                )
                            }
                        </select>
                    </dd>
                </dl>
                <button type="submit" className="btn btn-primary">Add</button>
                <Link to="/adminDashboard" className="btn btn-danger ms-2">Cancel</Link>
            </form>
        </div>
    )
}