import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

export default function Navbar(product) {
  return (
    <fieldset>
      <nav className="navbar">
        <Link to={`/`}>
          <Logo/>
        </Link>
        <button className="navBarBtn">Home</button>
        <button className="navBarBtn">About Us</button>
        <button className="navBarBtn">Contact Us</button>
        <button className="navBarBtn">Buy Now</button>
      </nav>
    </fieldset>
  )
}
