import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import Registerform from "../components/Home/Registerform";
import Profile from "../components/Home/Profile";


export default function Landing(){
  return(
    <div >
    <Navbar/>
    <HeroSection/>
    <Registerform/>
    
    </div>
  )
  }
