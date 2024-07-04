import React from "react";
import Header from "./Header";
import Section1 from "./Section1/HeroSection";
import Section2 from "./Section2/Section2";

function App() {
  return (
    <div className="bg-customDark min-h-screen flex flex-col items-center font-sans text-white">
      <Header />
      {/* <Main /> */}
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
