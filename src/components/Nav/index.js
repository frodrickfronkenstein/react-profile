import React from 'react';

function Nav() {
    const categories = [
        { name: "About Me", description: "short bio"},
        { name: "Portfolio", description: "samples of my work"},
        { name: "contact", description: "how to get in touch with me"},
        { name: "resume" , description: "pretty self explanitory"},
    ];

    const handleClick = (item) => {
        console.log(item);
        return item;
    }
    
    return(
        <nav>
            <ul>
                {categories.map((category) => (
                    <li key={category.name} >
                        <span onClick={() => { handleClick(category.name); }} >
                            {category.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;