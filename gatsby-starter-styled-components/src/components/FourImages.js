import React from 'react';
import styled from 'styled-components';
import img_one from '../images/assets/img_one.jpg';
import img_two from '../images/assets/img_two.jpg';
import img_three from '../images/assets/img_three.jpg';
import img_four from '../images/assets/img_four.jpg';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 35px;
    grid-row-gap: 0px;
    margin: 150px auto 25px;

    img {
        height: 242px;
        width: 255px;
    }

    @media (max-width: 1135px) {
        grid-column-gap: 10px;
        margin-top: 45px;

        img {
            height: 182px;
            width: 195px;
        }
    }

    @media (max-width: 765px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        margin: 15px auto 10px;
    
        img {
            height: 143px;
            width: 151px;
        }
    }

 
`;

const FourImages = () => {
    return (
        <GridContainer>
            <img src={img_one} />
            <img src={img_two} />
            <img src={img_three} />
            <img src={img_four} />
        </GridContainer>
    )
}

export default FourImages
