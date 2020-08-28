import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'Language':[{name: 'JavaScript', number: 80}, {name: 'Java', number: 80},{name: 'C++', number: 60}, {name: 'HTML5', number: 95},{name: 'CSS3', number: 95},{name: 'SQL', number: 85}],
            'Framework': [{name: 'React.js', number: 75},{name: 'Redux', number: 70},{name: 'Java Spring', number: 80},{name: 'Node.js', number: 70},{name: 'Angular.js', number: 60}],
            'Software': [{name: 'AWS', number: 65},{name: 'PCF', number: 85},{name: 'Agile', number: 90},{name: 'Software Development Cycle', number: 85},{name: 'Postman', number: 90},{name: 'Git', number: 90},{name: 'Jenkins', number: 70}],
        };
    }    

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <br/>
            <h3>Languages</h3>
            <ul>
            {this.state.Language.map((data)=>{
                return <li>{data.name}<LinearProgress variant="determinate" value={data.number} color="primary"/></li>
            })}
            </ul>
            <br/>
            <h3>Frameworks</h3>
            <ul>
            {this.state.Framework.map((data)=>{
                return <li>{data.name}<LinearProgress variant="determinate" value={data.number} color="secondary"/></li>
            })}
            </ul>
            <br/>
            <h3>Software & Tools</h3>
            <ul>
            {this.state.Software.map((data)=>{
                return <li>{data.name}<LinearProgress variant="determinate" value={data.number} color="primary"/></li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills