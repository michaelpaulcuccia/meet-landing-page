import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    margin-left: 15px;
    border-radius: 30px;
    border: none;
    color: #FFFFFF;
    font-size: 16px;
    background-color: ${props => 
        {
            if (props.variant === 'secondary'){
                return "#D9B8FF"
            } else {
                return "#4D96A9"
            }
        }
    };
    height: 48px;
    padding: 8px 22px;

    @media (max-width: 1075px){
        font-size: 12px;
        padding: 6px 18px;
    }  
`;

const Button = props => {
    return (
        <Wrapper variant={props.variant}>
            {props.children}
        </Wrapper>
    )
}

export default Button