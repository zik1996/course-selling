import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserLogout } from "../userLogout/userLogout";
import { useCookies } from "react-cookie";

export function Header() {
    const [menu, setMenu] = useState([])
    const [cookies, setCookie, removeCookie] = useCookies("username")
    const [isLoginToggle, setIsLoginToggle] = useState(false);

    function LoadMenu() {
        axios.get("data/menu.json")
            .then(res => {
                console.log(res.data)
                setMenu(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        LoadMenu()
        setIsLoginToggle(cookies['username'] !== undefined)
    }, [cookies])
    return (
        <div className="d-flex justify-content-between align-items-center p-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}>
            <div>
                <span className="h2 text-primary">E-Academy</span>
            </div>
            <div>
                {
                    menu.map(item =>
                        <span key={item.id} className="me-4"><Link to={item.path} className="text-decoration-none fw-bold text-dark">{item.name}</Link></span>
                    )
                }
                <span>
                    {
                        isLoginToggle ? (  // if user Login
                            <UserLogout />       // sign out button show
                        ) : (
                            <Link to="/userLogin" className="btn btn-primary">Login</Link>
                        )
                    }
                </span>

            </div>


        </div>
    )
}