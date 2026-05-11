import React from "react";
import '../styles/content.css';
import Introduction from "./Introduction";
import Projects from "./Projects";
import Contact from "./Contact";
import { Button } from "@react-email/button";



function Content () {
    return (
       <div className="content">
        <Introduction/>
        <Projects/>
        <Contact/>
        <Button/>
        
       </div>
    )
}

export default Content

