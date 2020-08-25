import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'Language':['JavaScript', 'Java', 'C++', 'HTML5', 'CSS3', 'SQL'],
            'Framework': ['React.js', 'Redux', 'Java Spring', 'Node.js', 'Angular.js'],
            'Software': ['AWS', 'PCF', 'Agile', 'Software Development Cycle', 'Postman', 'Git', 'Jenkins']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <br/>
            <h3>Languages</h3>
            <ul>
            {this.state.Language.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            <br/>
            <h3>Frameworks</h3>
            <ul>
            {this.state.Framework.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            <br/>
            <h3>Software & Tools</h3>
            <ul>
            {this.state.Software.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills