import React from 'react';
import styled from 'styled-components';
import left from '../images/assets/image-hero-left.png';
import right from '../images/assets/image-hero-right.png';
import logo from '../images/assets/logo.svg';
import Button from './Button';

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 400px;
    overflow: hidden;

    @media (max-width: 765px) {
        display: grid;
        justify-items: center;
        height: 800px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
        "HeroMobile HeroMobile HeroMobile HeroMobile"
        "HeroLeft HeroLeft HeroRight HeroRight"
        "CenterContentWrapper CenterContentWrapper CenterContentWrapper CenterContentWrapper"
        ". ButtonContainer ButtonContainer . ";
    }
`;

const HeroLeft = styled.div`
    grid-area: HeroLeft;
    background-image: url(${left});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 30%;

    @media (max-width: 765px) {
        width: 100%;
    }
`;

const CenterContentWrapper = styled.div`
    grid-area: CenterContentWrapper;
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 0 25px;

    @media (max-width: 765px) {
        width: 70%
    }

`;

// HACK - for mobile
// HeroCenter is within CenterContentWrapper
// This one exists outside of it
// HeroCenter will be hidden on Mobile

const HeroMobile = styled.div`
    grid-area: HeroMobile;
    display: none;

@media (max-width: 765px) {
    display: flex;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    margin: 0 auto;
}
`;

const HeroCenter = styled.div`
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 765px) {
       display: none;
    }
`;

const MainText = styled.p`
    color: #28283D;
    font-size: 64px;
    text-align: center;
    font-weight: 900;

    @media (max-width: 1075px){
        font-size: 58px;
    }    

    @media (max-width: 765px) {
        font-size: 36px;
    }

`;

const SubText = styled.p`
    color: #87879D;
    text-align: center;
    font-size: 26px;

    @media (max-width: 1075px){
        font-size: 20px;
    }  

    @media (max-width: 1075px){
        font-size: 12px;
    }
    
`;

const HeroRight = styled.div`
    grid-area: HeroRight;
    background-image: url(${right});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 30%;

    @media (max-width: 765px) {
        width: 100%;
    }
`;

const ButtonContainer = styled.div`
    grid-area: ButtonContainer;
    display: flex;
    justify-content: center;
    padding-top: 15px;
`;

const HeroAndHeader = () => {
    return (
        <>
        <MainWrapper>
            <HeroMobile />
            <HeroLeft />
            <CenterContentWrapper>
                <HeroCenter />
                <MainText>
                    Group Chat for Everyone
                </MainText>
                <SubText>
                Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
                </SubText>
                <ButtonContainer>
                    <Button>Download v1.0</Button>    
                    <Button variant="secondary">What is it?</Button> 
                </ButtonContainer>
            </CenterContentWrapper>
            <HeroRight />
        </MainWrapper>   
        </>
    )
}

export default HeroAndHeader
