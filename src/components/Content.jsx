import React from "react";
import '../styles/content.css';
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Contact from "./Contact";
import { Button } from "@react-email/button";



function Content () {
    return (
       <div className="content">
        <Navbar/>
        <Introduction/>
        <Projects/>
        <Contact/>
        <Button/>
        

       </div>
    )
}

export default Content

