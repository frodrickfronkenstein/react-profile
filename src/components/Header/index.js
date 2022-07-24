import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props
    
    return (
        <header>
            <h2>
                <a href="/">Eric Smith's Portfolio</a>
            </h2>
            <Nav></Nav>
        </header>
    )
}

export default Header;