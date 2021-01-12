import React from 'react'
import '../About.css'
import {motion} from 'framer-motion'


function About() {
    return(
        <motion.div exit={{opacity: 0}} 
        animate={{opacity:1}} 
        initial={{opacity: 0}}  
        className="about-container">
            <div className="about-body">
            <h1><u>About</u></h1>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page 
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                distribution of letters, as opposed to using 'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
                text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                
                </p>

                <p>
                I spend much of my free time designing, building, and testing personal
                and club-related projects. Most of them are open source and available
                on my{" "}
                <a href={`https://github.com`}>
                    GitHub
                </a>
                .
                </p>

                <p>
                You can check out my resume{" "}
                <a href={"https://jayden-chan.me/resume"}>
                    here
                </a>
                .
                </p>
            </div>
      </motion.div>
    )
}

export default About;
