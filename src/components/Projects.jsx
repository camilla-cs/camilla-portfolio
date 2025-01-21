import React from "react";

function Projects () {
    
   return (
    <div className="content">
        <h1 id="projects">Projects 🌱 </h1> 
        
        <div className="links-container">

            <li><a href="https://animetrail.netlify.app/"><strong>AnimeTrail</strong></a></li>
            <p>Full stack application built with React as final assignment for Coder Academy, made for retrieveing anime recommendations based on title input.</p>
            
        
            <li><a href="https://lavieenghibli.netlify.app/"><strong>La vie en Ghibli</strong></a></li>
            <p>Website created to explore in depht the Studio Ghibli universe, from recipes inspired from the movies to real-life locations. Made with React.  </p>


            <li><a href="https://github.com/camilla-cs/APIproject2024"><strong>Climbing api </strong></a></li>
            <p> Major coding assignment for which I had to create a API webserver for a real-world app idea using Python, Flask and ORM.
            My idea was inspired by my passion for climbing so I designed a Climbing API where users could store climbing routes, check the presence of events and create a community of climbers. 
            </p>

            <li><a href="https://github.com/camilla-cs/TERMINALAPP_T1A3"><strong>Terminal app</strong></a></li>
            <p>Second assignment for Coder Academy with the purpose of designin, implementing and testing a terminal application that accepts user input in the form of a file or text input and produce printed output or interact with the file system. 
                My project was inspired by text-based adventure games and it was developed by using Python. 
            </p>

            <li> <a href="https://github.com/camilla-cs/T1A2portfolioassignment"><strong> Portfolio T1A2</strong></a></li>
            <p>First assignment for Coder Academy Febraury 2024 cohort using HTML and CSS that would aim to showcase personal information, skills and intersts and to demonstrate professional knowledge in the form of a portfolio.</p>
            
            <p>You can find more information about my projects on my personal <a href="https://github.com/camilla-cs" id="github"><strong>Github page</strong></a> . </p>
        </div>
    </div>
   )
}

export default Projects