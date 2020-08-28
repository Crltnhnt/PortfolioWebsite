import React, { Component } from 'react';
import { MDBProgress } from 'mdbreact';
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
            <h1 className="font-weight-bold white-text">My Skills</h1>
            <p className="font-weight-bolder white-text">These are the skills that I learned through my internship experience.</p>
            <br/>
            <h3 className="font-weight-bold white-text">Languages</h3>
            <ul>
            {this.state.Language.map((data)=>{
                return <li className="font-weight-bolder white-text">{data.name}<MDBProgress material value={data.number} color="info" className="my-2"/></li>
            })}
            </ul>
            <br/>
            <h3 className="font-weight-bold white-text">Frameworks</h3>
            <ul>
            {this.state.Framework.map((data)=>{
                return <li className="font-weight-bolder white-text">{data.name}<MDBProgress material value={data.number} color="warning" className="my-2"/></li>
            })}
            </ul>
            <br/>
            <h3 className="font-weight-bold white-text">Software & Tools</h3>
            <ul>
            {this.state.Software.map((data)=>{
                return <li className="font-weight-bolder white-text">{data.name}<MDBProgress value={data.number} color="info" className="my-2"/></li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills