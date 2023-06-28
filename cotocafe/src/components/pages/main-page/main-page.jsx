import React from "react";
import "./main-page.css";
import About from "../../blocks/about/about";
import StarsList from "../../blocks/stars-list/stars-list";

function MainPage() {
  return (
    <main>
      <About />
      <StarsList/>
    </main>
  );
}

export default MainPage;
