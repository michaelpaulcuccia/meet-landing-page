import React from "react"
import SEO from "../components/seo"
import '../../styles/main.css';
import MainWrapper from "../components/MainWrapper";
import HeroAndHeader from "../components/HeroAndHeader";
import GridTest from "../components/GridTest";

const IndexPage = () => (
    <MainWrapper>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HeroAndHeader />
      <br></br>
      <br></br>
      <br></br>
      <GridTest />
    </MainWrapper>  
)

export default IndexPage
