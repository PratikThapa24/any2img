import React from "react";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserJobsPage from "./UserJobsPage";

function App() {
  return (
    <Router>
      <div className="bg-customDark min-h-screen flex flex-col items-center font-sans text-white">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element= {<UserJobsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
