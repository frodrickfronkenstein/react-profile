import React from 'react';

function Nav(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props
    
    return(
        <nav>
            <ul>
                {categories.map((category) => (
                    <li 
                    className={`${currentCategory.name === category.name && ""}`}
                    key={category.name}
                    >
                        <span
                        onClick={() => {
                            setCurrentCategory(category.name);
                        }}>
                            {category.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;