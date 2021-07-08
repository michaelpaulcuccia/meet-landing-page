import React from "react"
import SEO from "../components/seo"
import '../../styles/main.css';
import MainWrapper from "../components/MainWrapper";
import HeroAndHeader from "../components/HeroAndHeader";

const IndexPage = () => (
    <MainWrapper>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HeroAndHeader />
    </MainWrapper>  
)

export default IndexPage
