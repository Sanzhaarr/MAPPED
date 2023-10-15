import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import Pins from "./pages/Pins";
import Map from "./components/map/Map";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pins" element={<Pins />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
