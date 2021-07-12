import React from 'react';
import styled from 'styled-components';
import imageFooter from '../images/assets/image-footer.jpg';
import Button from './Button';

const MainContainer = styled.div`
    background-image: url(${imageFooter});
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 308px;
    margin-top: 40px;  
`;

const TextContainer = styled.div`
    display: flex;    
    justify-content: space-around;
    padding-top: 100px;  

    p {
        color: #FAFAFA;  
    }

    .pOne {
        font-size: 40px;
        height: 88px;
        width: 350px;
    }

    .pTwo {
        font-size: 18px;
        height: 88px;
        width: 350px;
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