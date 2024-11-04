import React from "react";
import "../styles/contact.css";


function Contact (){
    return (
        <div className="content"> 
            <h1>Contact 📮 </h1> 
            
            <p>You can contact me at the following e-mail: {""}
                <a className="email" href="mailto:deprettocamilla@gmail.com">deprettocamilla@gmail.com</a>  
            </p>
           
            

            
            <h4><strong>Other: </strong> </h4>
            
            <div className="links-container">
                <li>
                    <a href="https://www.linkedin.com/in/camilla-de-pretto-815979234/">Linkedin</a>
                </li>
                <li> 
                    <a href="http://">CV</a>
                </li>
                <li>  
                    <a href="https://github.com/camilla-cs">Github</a> 
                </li>
            </div>
        
        </div>
    )
}

export default Contact