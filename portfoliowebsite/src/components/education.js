import React, { Component } from 'react';
import Widecard from '../components/widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Bachelor's of Science" major="Computer Science" where="Northern Illinois University" gpa="3.01 gpa" from="2017" to="2020"/>
            </div>
            )
        }
    }
    
export default Education