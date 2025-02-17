import axios from "axios"
import { useEffect, useState } from "react"

export function Home() {
    const [studentsDetails, setStudentDetails] = useState([{ image: '', description: '', name: '', designation: '' }])

    function LoadStudentDetails() {
        axios.get(`data/student-details.json`)
            .then(res => {
                console.log(res.data)
                setStudentDetails(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        LoadStudentDetails()
    }, [])
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center bg-light text-center" style={{ height: "500px" }}>
                <div>
                    <h1 className="fw-bold">Welcome to our E-Academy Platform</h1>
                    <p className="my-4">Learn, Grow, Excel</p>
                    <button className="btn btn-primary fw-bold">Get Started</button>
                </div>
            </div>
            <div className="m-auto" style={{ width: "90%" }}>
                <h2 className="fw-bold text-center my-4 text-primary">What our students say</h2>
                <div className="d-flex flex-wrap">
                    {
                        studentsDetails.map(student =>
                            <div key={student} className="card m-4 p-2" style={{ width: "300px", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                                <div className="d-flex justify-content-center align-items-center pt-4">
                                    <img className="rounded rounded-circle" src={student.image} alt="" height="100px" width="100px" />
                                </div>
                                <div className="card-body">
                                    <p>{student.description}</p>
                                </div>
                                <div className="card-footer text-center">
                                    <p className="fw-bold text-primary">{student.name}</p>
                                    <p>{student.designation}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}