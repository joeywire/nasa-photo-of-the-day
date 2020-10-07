import React from 'react';
import { BASE_URL } from '../constants/apiInfo';

function Header(props) {
    const {date} = props;

    return (
        <header>
            <h1>NASA's Photo of the Day!</h1>
            <div>{date}</div>
        </header>
    )


};

export default Header;