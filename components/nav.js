import Link from "next/link"
import React ,{useEffect,useRef} from "react"
import lottie from "lottie-web";
import { gsap ,TimelineLite,Power3} from 'gsap/dist/gsap';
import styles from "../styles/Home.module.css";

export default function Navbar() {


  const contain=useRef(null)

  useEffect(()=>{
    lottie.loadAnimation({
      container:contain.current,
      renderer:'svg',
      loop:true,
      autoplay:true,
      animationData: require("../public/cssjson/abovenavbar.json.json")
       })
	},[])
  let t1= new TimelineLite({delay:0.3})
  useEffect(()=>{
    t1.from('.navbar',{y:-10,opacity:0,ease:Power3.easeOut,delay:0.2},'Start')

  },[])
  return (
    <>



{/* lettre de motivation motivé w 3andi experience w nheb experience jdida */}


    <nav className="navbar navbar-expand-lg navbar-light " width={100}>
    {/* <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div > */}
      <Link href="#Amina">
       <img src="/signature.png" height="100px" id="top"></img>
      </Link>
      
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="#projects">
              <a className="nav-link">Projects</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#experience">
              <a className="nav-link">Experience</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#trainingSkills">
              <a className="nav-link">Training & Skills</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#contact">
              <a className="nav-link">Contact</a>
            </Link>
          </li>
        
        </ul>
      </div>
    </nav>
    </>
  );
}