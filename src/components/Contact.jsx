import React from "react";
import "../styles/contact.css";


function Contact (){
    return (
        <div className="content"> 
            <h1 id="contact">Contact 📮 </h1> 
            
            <p>You can contact me at the following e-mail: {""}
                <a className="email" href="mailto:deprettocamilla@gmail.com" >deprettocamilla@gmail.com</a>  
            </p>
           
            

            
            <h4><strong>Other: </strong> </h4>
            
            <div className="links-container">
                <li>
                    <a href="https://www.linkedin.com/in/camilla-de-pretto-815979234/"target="_blank" rel="noopener noreferrer">Linkedin</a>
                </li>
                <li>  
                    <a href="https://github.com/camilla-cs" target="_blank" rel="noopener noreferrer">Github</a> 
                </li>
            </div>
        
        </div>
    )
}

export default Contact