import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
            <ul>
            <li><Link item="Home" to="/">Home</Link></li>
            <li><Link item="About" to="/about">About</Link></li>
            <li><Link item="Education" to="/education">Education</Link></li>
            <li><Link item="Skills" to="/skills">Skills</Link></li>
            <li><Link item="Projects" to="/projects">Projects</Link></li>
            <li><Link item="Contact" to="/contact">Contact</Link></li>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
