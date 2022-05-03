import { Link } from "react-router-dom"

export const Navbar=()=>{
    return (
			<div>
				<Link to="/Register">Register</Link>
				<Link to="/Login">Login</Link>
			</div>
		);
}