import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";

// Обёртка для контента страниц
function PageWrapper() {
  return (
  <>
  <Header/>
  <MainPage/>
  <Footer/>
  </>
  )
}

export default PageWrapper;