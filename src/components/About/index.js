import React from 'react';

function About() {
    return(
    <section class="page-section" id="about">
      <h2>About Me</h2>
      <div>
      <img class="profile-picture" src={require("../../assets/ismael.jpg")} alt="Ismael Ramirez" />
     
        <p>
        My Name is Ismael Ramirez, I am 31 years of age. I joined The University of Arizona Coding Boot Camp on May 21st of this year. I am a very motivated, hard working person that is always willing to learn.
        </p>

      </div>
    </section>

    )
}

export default About;