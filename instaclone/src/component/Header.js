import React from "react"
import { Link,} from 'react-router-dom';
import { BsFillCameraFill } from "react-icons/bs";
import {  FiTarget} from "react-icons/fi";
import "../style/Home.css"
const Header=()=>{
    return(
        <>
      <div id="header-part">
      <nav className="navbar fixed-top  navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <div>
          <FiTarget style={{   color: "white",   width: "30px",  height: "30px",  margin: "5px",}}></FiTarget>
          <h4 className="aaaa">Instaclone</h4>
        </div>
        <Link to={"/Upload"}> <BsFillCameraFill 
          style={{
            color: "white",
            width: "50px",
            height: "50px",
            marginRight: "50px",
          }}/>
          </Link>  
      </div>
    </nav>
    </div>
        </>
    )
}
export default Header