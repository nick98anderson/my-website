import { Button } from './Button'
import '../App.css'
import './HeroSection.css'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {motion} from 'framer-motion'

function HeroSection(){
    return (
        <motion.div exit={{opacity: 0}} 
        animate={{opacity:1}} 
        initial={{opacity: 0}} div className='hero-container'>
            <h1>Nick Anderson</h1>
            <p>Code monkey, Cinephile and Ravens fan. </p>
            <div className='hero-btns'>
                <FaGithub className='fa-btn' size={40} color='white'/>
                <FaLinkedin className='fa-btn' size={40} color='white'/>
                <FaInstagram className='fa-btn' size={40} color='white'/>
            </div>
        </motion.div>
    );
}

export default HeroSection;

