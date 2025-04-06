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

function App() {
  return (
  <div>
    <Router>
<<<<<<< HEAD

=======
>>>>>>> 164e9b1461d2baee517c97cea522f5a384379ed2
        {/* <Landing /> */}
        {/*  <Authentication/> */}
        {/* <Contact/>  */}
        {/* * <Gallery/>  */}
<<<<<<< HEAD
        {/* <Pricing/> */}
=======
>>>>>>> 164e9b1461d2baee517c97cea522f5a384379ed2
        {/* <Faq/> */}
        {/* <Aboutus/>  */}
        {/* <Gallery/>  */}
        {/* <BlogDetails/> */}
<<<<<<< HEAD
         <Blog/> 

      {/* <Landing/> */}
       {/* <Authentication/>  */}
        {/* <Contact/>  */}
       {/* * <Gallery/>  */}
        {/* <Faq/>  */}
        {/* <Aboutus/>  */}
        {/* <Testimonial/> */}
           {/* <Gallery/>  */}
           {/* <BlogDetails/> */}
         {/* <Blog/> */}
=======
        {/* <Blog/> */}
        <Pricing/>
>>>>>>> 164e9b1461d2baee517c97cea522f5a384379ed2
      </Router>
      </div>
  );
}

export default App;