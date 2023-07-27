import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route  path="/" component={<Home />} />
        <Route  path="/about" component={<About />} />
        <Route  path="/stocks" component={<Dashboard />} />
        <Route  path="/stocks/:symbol" component={<Stock />} />
        </Routes>
        
    </div>
    
  );
};

export default App;