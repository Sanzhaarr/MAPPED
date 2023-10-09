import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Welcome from "./pages/Welcome";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import Pins from "./pages/Pins";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pins" element={<Pins />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
