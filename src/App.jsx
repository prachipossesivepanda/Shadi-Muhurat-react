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

function App() {
  return (
  <div>
    <Router>
       <Landing /> 
<<<<<<< HEAD
    
=======
        {/* <Authentication/>   */}
>>>>>>> 96632e35a47b9f8ecb906aed65bd3d420a6e4795
        {/* <Contact/>  */}
       {/* * <Gallery/>  */}
       {/* <Pricing/> */}
       {/* <Faq/> */}
        {/* <Aboutus/>  */}
<<<<<<< HEAD
          {/* <Gallery/> */}
         {/* <Blog/> */}
=======
        {/* <Gallery/>   */}
       {/* <Blog/> */}
>>>>>>> 96632e35a47b9f8ecb906aed65bd3d420a6e4795
      </Router>
      </div>
  );
}

export default App;
