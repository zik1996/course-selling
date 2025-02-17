import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function UserLogout() {
    const [cookies, setCookie, removeCookie] = useCookies("username")

    const navigate = useNavigate();

    function handleLogoutClick() {
        removeCookie("username", { path: "/" })
        setTimeout(() => {
            navigate("/userLogin");
            window.location.reload();
        }, 100)
    }
    return (
        <button onClick={handleLogoutClick} className="btn btn-primary">Logout </button>
    )
}