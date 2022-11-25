import React ,{useState,useEffect}from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)
  return (
    <>
      <div className="header">
        <Link to="/">
          <h3>APP</h3>
        </Link>
        <ul className={click ? 'nav-menu active' :'nav-menu'}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            <Link to="/project"> My Project</Link>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
        {click ?(

            <FaTimes  size={20} style={{color:'white'}} />
        ):(

            <FaBars  size={20} style={{color:'white'}} />
        )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
