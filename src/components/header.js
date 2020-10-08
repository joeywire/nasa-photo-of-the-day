import React from 'react';
import { BASE_URL } from '../constants/apiInfo';
import styled from 'styled-components'

function Header(props) {
    const {date} = props;

    const StyledHeader = styled.header`
        background: navy;
        color: whitesmoke; 
        font-family: Arial, Helvetica, sans-serif;
        padding: 5% 0;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;

        h1, div {
            padding: 0 5%;
        }

        h1 {
            text-decoration: underline;
        }
    `

    return (
        <StyledHeader>
            <h1>NASA's Photo of the Day!</h1>
            <div>{date}</div>
        </StyledHeader>
    )


};

export default Header;