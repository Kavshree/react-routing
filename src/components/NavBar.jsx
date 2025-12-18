import { useContext } from "react";
import { Link } from "react-router-dom";
import { userAuth } from "./auth";

export default function NavBar() {
    const authContext = useContext(userAuth);
    return (
        <>
            <nav className="d-flex flex-justify-evenly">
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/profile">Profile</Link >
                {!authContext.user && <Link to="/login">
                    Login
                </Link> }
            </nav>
        </>
    )
}