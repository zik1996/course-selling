export function Home() {
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
                    <div className="card m-4 p-2" style={{ width: "300px", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <div className="d-flex justify-content-center align-items-center pt-4">
                            <img className="rounded rounded-circle" src="images/men.jpeg" alt="" height="100px" width="100px" />
                        </div>
                        <div className="card-body">
                            <p>This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.</p>
                        </div>
                        <div className="card-footer text-center">
                            <p className="fw-bold text-primary">John Doe</p>
                            <p>Student</p>
                        </div>
                    </div>
                    <div className="card m-4 p-2" style={{ width: "300px", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <div className="d-flex justify-content-center align-items-center pt-4">
                            <img className="rounded rounded-circle" src="images/women.jpeg" alt="" height="100px" width="100px" />
                        </div>
                        <div className="card-body">
                            <p>This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.</p>
                        </div>
                        <div className="card-footer text-center">
                            <p className="fw-bold text-primary">John Doe</p>
                            <p>Student</p>
                        </div>
                    </div>
                    <div className="card m-4 p-2" style={{ width: "300px", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <div className="d-flex justify-content-center align-items-center pt-4">
                            <img className="rounded rounded-circle" src="images/men.jpeg" alt="" height="100px" width="100px" />
                        </div>
                        <div className="card-body">
                            <p>This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.</p>
                        </div>
                        <div className="card-footer text-center">
                            <p className="fw-bold text-primary">John Doe</p>
                            <p>Student</p>
                        </div>
                    </div>
                    <div className="card m-4 p-2" style={{ width: "300px", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <div className="d-flex justify-content-center align-items-center pt-4">
                            <img className="rounded rounded-circle" src="images/women.jpeg" alt="" height="100px" width="100px" />
                        </div>
                        <div className="card-body">
                            <p>This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.</p>
                        </div>
                        <div className="card-footer text-center">
                            <p className="fw-bold text-primary">John Doe</p>
                            <p>Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}