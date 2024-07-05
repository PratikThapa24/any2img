import React from "react";

import Button from "../Buttons/Button";
import { NavMiddle, NavBegin } from "../navigation/Navigation";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate(); // Use histor hook that gives access to history object
  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <header className="w-full bg-customDark px-8 py-5 flex items-center justify-between">
      <NavBegin />
      <NavMiddle />
      <Button value="Login" onClick={navigateToLogin} />
    </header>
  );
}

export default Header;
