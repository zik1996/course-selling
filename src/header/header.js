export function Header() {
    return (
        <div className="d-flex justify-content-between align-items-center p-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}>
            <div>
                <span className="h2 text-primary">E-Academy</span>
            </div>
            <div>
                <span className="me-4">Home</span>
                <span className="me-4">Courses</span>
                <span className="me-4">About</span>
                <span className="me-4">Login</span>
            </div>

        </div>
    )
}