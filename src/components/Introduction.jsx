import React from "react";
import {TypeAnimation} from "react-type-animation"; 

import "../styles/animation.css";


function Introduction () {
    return (
        <div className="content">
            <h1>Hello <span className="wave">👋🏻</span> I'm Camilla</h1> 

            <h4>{""}
                <TypeAnimation 
                    sequence={[
                        "Software Developer based in Sydney",
                        9000,
                        "Bouldering enthusiast",
                        2000,
                        "Matcha Lover",
                        2000,
                        "Software Developer based in Sydney"
                        
                      ]}
                      wrapper="span"
                      speed={40}
                      repeat={0}
                    />
            </h4>
        
           

            <div className="button">
                <a href="https://github.com/camilla-cs#hi--im-camilla">check out my work!</a>
            </div>
        </div>
         

    )
}


export default Introduction