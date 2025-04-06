import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./components/Home/Landing";

 import Landing from "./pages/Landing"; // Import Home page
 import Authentication from "./pages/Authentication";
import "./App.css";
import Contact  from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
  <div>
    <Router>

        {/* <Landing /> */}
        {/*  <Authentication/> */}
        {/* <Contact/>  */}
        {/* * <Gallery/>  */}
        {/* <Pricing/> */}
        {/* <Faq/> */}
        {/* <Aboutus/>  */}
        {/* <Gallery/>  */}
        {/* <BlogDetails/> */}
    
      {/* <Landing/> */}
       {/* <Authentication/>  */}
        {/* <Contact/>  */}
       {/* * <Gallery/>  */}
        {/* <Faq/>  */}
        {/* <Aboutus/>  */}
        {/* <Testimonial/> */}
           {/* <Gallery/>  */}
           {/* <BlogDetails/> */}
          <Blog/> 
      </Router>
      </div>
  );
}

export default App;