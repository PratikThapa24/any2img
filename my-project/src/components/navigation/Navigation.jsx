import React from "react";
import FlashIcon from "./FlashIcon";

function NavBegin() {
  return (
    <div className="mr-10">
      <FlashIcon size="48px"/>
      <span className="text-gray-300 text-xl font-bold hover:text-gray-500 underline-animation ">
        JobLogify
      </span>
    </div>
  );
}

function NavMiddle() {
  return (
    <>
      <div className="flex-1 flex justify-center font-bold ">
        <div className="flex items-center space-x-8 ">
          <a
            className="text-gray-300 text-xl hover:text-gray-500 underline-animation "
            href="#"
          >
            Why use JobLogify?
          </a>
          <a
            className="text-gray-300 text-xl hover:text-gray-500 underline-animation"
            href="#"
          >
            FAQ
          </a>
        </div>
      </div>
    </>
  );
}

export {NavMiddle, NavBegin};
