import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 650px;

    @media (max-width: 765px) {
        width: 250px;
    }
`;

const POne = styled.p`
    color: #4D96A9;
    font-size: 26px;
    letter-spacing: 4px;
    text-align: center;
    padding-bottom: 15px;

    @media (max-width: 765px) {
        padding-bottom: 10px;
        font-size: 20px;
    }
`;

const PTwo = styled.p`
    color: #28283D;
    font-size: 44px;
    font-weight: 900;
    text-align: center;
    padding-bottom: 25px;

    @media (max-width: 765px) {
        font-size: 38px;
        padding-bottom: 15px;
    }
`;

const PThree = styled.p`
    color: #87879D;
    font-size: 18px;
    font-weight: 500;
    text-align: center;

    @media (max-width: 765px) {
        font-size: 14px;
    }
`;

const MidText = () => {
    return (
        <Wrapper>
            <POne>BUILT FOR MODERN USE</POne>
            <PTwo>Smarter meetings, all in one place</PTwo>
            <PThree>Send messages, share files, show your screen, and record your meetings - all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</PThree>
        </Wrapper>
    )
}

export default MidText
