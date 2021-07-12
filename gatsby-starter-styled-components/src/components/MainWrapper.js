import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1400px;
    margin 15px auto;
    background-color: #F2F2F2;

    @media (max-width: 765px) {
      max-width: 375px;
    }
`;

const MainWrapper = (props) => {
  return <Container>{props.children}</Container>;
};

export default MainWrapper;
