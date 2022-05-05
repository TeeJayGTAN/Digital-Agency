import logo from "../assets/logo.png";
import {Link} from "react-router-dom"
import Menu from "../assets/icons/menu"

function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center">
        <Link to="/">        
            <img src={logo} alt="titta" className="h-14 w-auto"/>
        </Link>
        <ul className="flex justify-between items-center flex-col fixed top-0 right-0 bg-primary text-white h-screen w-[70%]">
            <li>
                <Link to="/">Portfolio</Link>
            </li>
            <li>
                <Link to="/">Services</Link>
            </li>
            <li>
                <Link to="/">Blog</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact us</Link>
            </li>
        </ul>
        <button className="sm:hidden"><Menu className="w-auto h-5"/></button>
    </nav>
  )
}

export default Navbar