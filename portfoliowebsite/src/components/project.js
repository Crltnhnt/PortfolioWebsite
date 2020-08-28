import React, { Component } from 'react';
import Projectcard from '../components/projectcard';

class Project extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Projects </h1>
            <Projectcard 
                title="Rapid Response Team Dashboard" 
                semester="Summer/Fall 2019" 
                internship="Discover Internship" 
                description="This is a centralized dashboard that helps the user find solutions from previous issues on the Discover Website." 
                stack="React,Java Spring, MySQL, AWS"
            />
            <Projectcard 
                title="Student Loan Services" 
                semester="Spring 2020" 
                internship="Discover Internship" 
                description="This was a backend project that converted the microservices from SOAP to RESTful web services in order to increase performance and use JSON." 
                stack="Java Spring"
            />
            <Projectcard 
                title="Covid-19 Tracker" 
                semester="Spring 2020" 
                internship="Side Project" 
                description="Displays the statistics from covid-19 globally and by country." 
                stack="React, API from another website for real data"
            />
            <Projectcard 
                title="Internship Data Management System" 
                semester="Summer 2020" 
                internship="Discover Internship" 
                description="This application is used to manage the data of interns using CRUD methods. The admin is able to track data and look at different metrics." 
                stack="React,Java Spring, MySQL, PCF"
            />
            </div>
            )
        }
    }
    
export default Project