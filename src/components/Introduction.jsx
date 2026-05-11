import React from "react";
import {TypeAnimation} from "react-type-animation"; 
import "../styles/introduction.css"; 


function Introduction () {
    return (
        <div className="content">
            <h1>Hello 👋🏻 I'm Camilla</h1> 

            <h4>{""}
                <TypeAnimation 
                    sequence={[
                        "Software Developer based in Melbourne",
                        7000,
                        "Bouldering enthusiast",
                        2000,
                        "Matcha Lover",
                        2000,
                        "Software Developer based in Melbourne"
                        
                      ]}
                      speed={30}
                      wrapper="span"
                      repeat={0}
                    />
            </h4>
        
           

            <div className="button">
                <a href="https://github.com/camilla-cs#hi--im-camilla" target="_blank" rel="noopener noreferrer">check out my work!</a>
            </div>
        </div>
         

    )
}


export default Introduction