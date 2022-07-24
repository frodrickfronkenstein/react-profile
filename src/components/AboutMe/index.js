import React from 'react';
import profilePic from "../../assets/images/profile-pic.jpeg";

function AboutMe() {
    return (
        <section>
            <h1 id="about">About Eric</h1>
            <img src={ profilePic } style={{ width: "50%" }} alt='profile'/>
        </section>
    );
}

export default AboutMe;