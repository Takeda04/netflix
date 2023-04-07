import React from "react";
import SinglePageCard from "../components/Card/SinglePageCard";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const SinglePage = (props) => {
  return (
    <>
    <Header/>
      <SinglePageCard item={props} />
      <Footer/>
    </>
  );
};


export default SinglePage;
