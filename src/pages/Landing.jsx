import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import Registerform from "../components/Home/Registerform";
import Profile from "../components/Home/Profile";
import Plan from "../components/Home/Plan";
import Service from "../components/Home/Service";
import Stats from "../components/Home/Stats";
import Together from "../components/Home/Together";
import Wedding from "../components/Home/Wedding";
import Footer from "../components/common/Footer";
import PerfectMatch from "../components/Home/PerfectMatch";
import Mobile from "../components/Home/Mobile";
//import ErrorBoundary from "../components/Home/ErrorBoundary";



export default function Landing(){
  return(
    <div >
    <Navbar/>
    <HeroSection/>
    <Registerform/>
    <Profile/>
    <Service/>
    
    <Stats/>
    
    <Together/>
    <Wedding/>
    <Plan/>
    <Mobile/>
    <PerfectMatch/>
    <Footer/>
    </div>
  )
  }
