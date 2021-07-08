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
`;

const HeroLeft = styled.div`
    background-image: url(${left});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    //width: 525px;
    //width: clamp(200px, 475px, 525px);
    width: 30%;
`;

const CenterContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    //width: 550px;
    width: 40%;
    padding: 0 25px;
`;

const HeroCenter = styled.div`
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    margin: 0 auto;
`;

const MainText = styled.p`
    color: #28283D;
    font-size: 64px;
    text-align: center;
    font-weight: 900;

    @media (max-width: 1075px){
        font-size: 58px;
    }    

    //at 765px go to Mobile
`;

const SubText = styled.p`
    color: #87879D;
    text-align: center;
    font-size: 26px;

    @media (max-width: 1075px){
        font-size: 20px;
    }  
`;

const HeroRight = styled.div`
    background-image: url(${right});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    //width: 525px;
    //width: clamp(200px, 475px, 525px);
    width: 30%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 15px;
`;

const HeroAndHeader = () => {
    return (
        <>
        <MainWrapper>
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
