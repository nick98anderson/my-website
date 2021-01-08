import { Button } from './Button'
import '../App.css'
import './HeroSection.css'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';

function HeroSection(){
    return (
        <div className='hero-container'>
            <video loop autoPlay muted >
                <source src='bg.mp4' type='video/mp4'></source>
            </video>
            <h1>Nick Anderson</h1>
            <p>Code monkey, Cinephile and Ravens fan. </p>
            <div className='hero-btns'>
                <FaGithub className='fa-btn' size={40} color='white'/>
                <FaLinkedin className='fa-btn' size={40} color='white'/>
                <FaInstagram className='fa-btn' size={40} color='white'/>
            </div>
        </div>
    );
}

export default HeroSection;

