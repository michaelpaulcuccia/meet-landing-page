import React from 'react';
import styled from 'styled-components';
import imageFooter from '../images/assets/footerImage.png';
import Button from './Button';

const MainContainer = styled.div`
    background-image: url(${imageFooter});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 308px;
    margin-top: 40px;  

    @media (max-width: 765px) {
        
    }
`;

const TextContainer = styled.div`
    display: flex;    
    justify-content: space-around;
    padding-top: 125px; 
    
    @media (max-width: 765px) {
        flex-direction: column;
        align-items: center;
        padding-top: 25px; 
    }

    p {
        color: #FAFAFA;  
    }

    .pOne {
        font-size: 40px;
        height: 88px;
        width: 350px;

        @media (max-width: 1000px) {
            font-size: 34px;
            height: 78px;
            width: 250px;
        }

        @media (max-width: 765px) {
            font-size: 28px;
            text-align: center;
            padding-top: 10px;
        }
    }

    .pTwo {
        font-size: 18px;
        height: 88px;
        width: 350px;

        @media (max-width: 1000px) {
            font-size: 16px;
            height: 78px;
            width: 250px;
        }

        @media (max-width: 765px) {
            font-size: 14px;
            text-align: center;
            padding-top: 15px;
            margin-bottom: 25px;
        }
    }

`;

const Footer = () => {
    return (
        <MainContainer>           
            <TextContainer>
                <p className="pOne">Experience More Together</p>
                <p className="pTwo">Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
                <Button variant="secondary">
                    Download v1.0
                </Button>
            </TextContainer> 
        </MainContainer>
     
    )
}

export default Footer

/*
//filter: invert(40%) sepia(77%) saturate(267%) hue-rotate(145deg) brightness(86%) contrast(90%);
*/