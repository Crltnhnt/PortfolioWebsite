import React, { Component } from 'react'

class Projectcard extends Component {
    render() {
        return (
            <div class="widecard">
            <div class="compdet">
            <h3>{this.props.title}</h3>
            <h4 class="secondtext">{this.props.semester}</h4>
            <h4 class="secondtext">{this.props.internship}</h4>
            <p class="secondtext"><b>Tech Stack: </b> {this.props.stack}</p>
            <p class="secondtext"><b>Description: </b>{this.props.description}</p>
            </div>
            </div>
            )
        }
    }
    
export default Projectcard