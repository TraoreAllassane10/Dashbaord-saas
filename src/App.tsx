import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import Client from "./pages/Client";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/client" element={<Client/>} />
      </Routes>
    </Router>
  );
}

export default App;
