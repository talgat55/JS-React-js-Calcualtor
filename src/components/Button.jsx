import React from 'react';
import styled from 'styled-components';

export default ({children, onClick}) => {
    return (
        <ButtonComponent onClick={onClick}>
            {children}
        </ButtonComponent>
    )
};

const ButtonComponent = styled.button`
    background: #47d2a6;
    border: none;
    padding: 16px 30px;
    display: inline-block;
    margin-top: 30px;
    border-radius: 2px;
    color: #fff;
    font-family: 'Baloo 2', cursive;
    font-size: 16px;
    cursor: pointer;
    transition: all .3s;
    &:hover{
      opacity: .5;
    }

`;