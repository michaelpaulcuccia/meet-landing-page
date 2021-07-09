import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-row-gap: 15px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    "A A C C"
    ". B B .";
`;

const A = styled.div`
    grid-area: A;
    height: 100px;
    width: 100px;
    background-color: yellow;
`;

const B = styled.div`
    grid-area: B;
    height: 100px;
    width: 100px;
    background-color: blue;
`;

const C = styled.div`
    grid-area: C;
    height: 100px;
    width: 100px;
    background-color: red;
`;

const GridTest = () => {
    return (
        <Container>
            <A />
            <B />
            <C />
        </Container>
    )
}

export default GridTest
