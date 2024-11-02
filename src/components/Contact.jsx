import React from "react";

function Contact (){
    return (
        <div class="content"> 
            <h1>Contact 📮 </h1> 
            
            <p>You can contact me at the following e-mail:  
                <button onclick="window.open ('mailto:deprettocamilla@gmail.com','_blank')" class="email">deprettocamilla@gmail.com</button>
            </p>


            
            <h4><strong>Other: </strong> </h4>
            
            <div class="links-container">
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