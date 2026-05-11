import React from "react";

function Projects () {
    
   return (
    <div className="content">
        <h1 id="projects">Projects 🌱 </h1> 
        
        <div className="links-container">
            <li><a href="https://github.com/camilla-cs/SpotifySkin" target="_blank" rel="noopener noreferrer"><strong>Spotify Skin [2026]</strong></a></li>
            <p>Project that retrieves and displays data by using Spicetify API to talk to the Spotify desktop app and Rainmeter to create a custom skin for the desktop.
                The app allows users to have spotify songs on their own desktop and control playback. 
                In order to use the widget and download it, the user needs to have both Spicetify installed and Rainmeter configured.</p>


            <li><a href="https://github.com/camilla-cs/Github-Users-Activity" target="_blank" rel="noopener noreferrer"><strong>Github Users Activity [2026]</strong></a></li>
            <p>Project for which I had to create a web application that retrieves and displays data from the GitHub API. 
                The app allows users to search for GitHub profiles and view their activity, including repositories, followers, and recent commits. 
                It was built using React for the frontend and Node.js for the backend.</p>

            <li><a href="https://github.com/camilla-cs/nekonooyasumi2025" target="_blank" rel="noopener noreferrer"><strong>Neko no Oyasumi (Hangman Game) [2025] </strong></a></li>
            <p>Hangaman game built using Electron, framework used to build desktop application with Javascript, HTML and CSS.</p>

            <li><a href="https://animetrail.netlify.app/" target="_blank" rel="noopener noreferrer"><strong>AnimeTrail [2024] </strong></a></li>
            <p>Full stack application built with React as final assignment for Coder Academy, made for retrieveing anime recommendations based on title input.</p>
            
        
            <li><a href="https://lavieenghibli.netlify.app/" target="_blank" rel="noopener noreferrer"><strong>La vie en Ghibli [2025]</strong></a></li>
            <p>Website created to explore in depht the Studio Ghibli universe, from recipes inspired from the movies to real-life locations. Made with React.  </p>


            <li><a href="https://github.com/camilla-cs/APIproject2024" target="_blank" rel="noopener noreferrer"><strong>Climbing api [2024]</strong></a></li>
            <p> Major coding assignment for which I had to create a API webserver for a real-world app idea using Python, Flask and ORM.
            My idea was inspired by my passion for climbing so I designed a Climbing API where users could store climbing routes, check the presence of events and create a community of climbers. 
            </p>

            <li><a href="https://github.com/camilla-cs/TERMINALAPP_T1A3" target="_blank" rel="noopener noreferrer"><strong>Terminal app [2024]</strong></a></li>
            <p>Second assignment for Coder Academy with the purpose of designin, implementing and testing a terminal application that accepts user input in the form of a file or text input and produce printed output or interact with the file system. 
                My project was inspired by text-based adventure games and it was developed by using Python. 
            </p>
            
            <p>You can find more information about my projects on my personal <a href="https://github.com/camilla-cs" target="_blank" rel="noopener noreferrer" id="github"><strong>Github page</strong></a> . </p>
        </div>
    </div>
   )
}

export default Projects