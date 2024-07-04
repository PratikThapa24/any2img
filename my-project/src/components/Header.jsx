import React from "react";

import Button from "./Button";
import {NavMiddle, NavBegin} from "./navigation/NavMiddle";

function Header() {
  return (
    <header className="w-full bg-customDark px-8 py-5 flex items-center justify-between">
      <NavBegin />
      <NavMiddle />
      <Button value="Login"/>
    </header>
  );
}

export default Header;
