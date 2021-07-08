import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1600px;
    margin 15px auto;
    background-color: #F2F2F2;
`;

const MainWrapper = props => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default MainWrapper
