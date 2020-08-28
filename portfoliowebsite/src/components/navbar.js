import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
            <ul>
            <li><Link item="Home" to="/PortfolioWebsite" style={{color: 'white'}}>Home</Link></li>
            <li><Link item="About" to="/about" style={{color: 'white'}}>About</Link></li>
            <li><Link item="Education" to="/education" style={{color: 'white'}}>Education</Link></li>
            <li><Link item="Skills" to="/skills" style={{color: 'white'}}>Skills</Link></li>
            <li><Link item="Projects" to="/projects" style={{color: 'white'}}>Projects</Link></li>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
