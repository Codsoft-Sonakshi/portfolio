import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";

const Home = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Projects />
            <Contact />
        </div>
    )
};

export default Home;

