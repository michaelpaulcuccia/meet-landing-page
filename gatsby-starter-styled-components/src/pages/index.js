import React from "react";
import SEO from "../components/seo";
import "../../styles/main.css";
import MainWrapper from "../components/MainWrapper";
import HeroAndHeader from "../components/HeroAndHeader";
import FourImages from "../components/FourImages";
import MidText from "../components/MidText";
import Footer from "../components/Footer";
//import GridTest from "../components/GridTest";

const IndexPage = () => (
  <MainWrapper>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroAndHeader />
    <FourImages />
    <MidText />
    <Footer />
  </MainWrapper>
);

export default IndexPage;
