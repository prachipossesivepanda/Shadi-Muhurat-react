import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./components/Home/Landing";

 import Landing from "./pages/Landing"; // Import Home page
import "./App.css";

function App() {
  return (
  <div>
    
      <Landing /> {/* Navbar is always visible */}
      
      </div>
  );
}

export default App;
