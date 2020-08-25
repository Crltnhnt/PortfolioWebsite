// import React, { Component } from 'react'

// export default class About extends Component {
//   render() {
//     return (
//       <div>
//         <section className="colorlib-about" data-section="about">
//         <div className="colorlib-narrow-content">
//             <div className="row">
//             <div className="col-md-12">
//                 <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
//                 <div className="col-md-12">
//                     <div className="about-desc">
//                     <span className="heading-meta">About Carlton</span>
//                     <h2 className="colorlib-heading">Who Am I?</h2>
//                     <p>Enthusiastic and innovative professional with a passion for software development, sharp technical acumen, and relevant educational background, 
//                         poised to leverage keen programming expertise in an entry-level role.</p>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </section>
//         <section className="colorlib-about">
//         <div className="colorlib-narrow-content">
//             <div className="row">
//             <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
//                 <span className="heading-meta">What I do?</span>
//                 <h2 className="colorlib-heading">Here are some of my past internship projects</h2>
//             </div>
//             </div>
//             <div className="row row-pt-md">
//             <div className="col-md-4 text-center animate-box">
//                 <div className="services color-1">
//                 <span className="icon">
//                     <i className="icon-bulb" />
//                 </span>
//                 <div className="desc">
//                     <h3>Rapid Response Team Dashboard Application <span>Summer 2019 - Fall 2019</span> </h3>
//                     <p>Full stack application using React, Java Spring, MySQL, AWS. This is a centralized dashboard that helps the user find solutions from previous issues on the Discover Website. </p>
//                 </div>
//                 </div>
//             </div>
//             <div className="col-md-4 text-center animate-box">
//                 <div className="services color-3">
//                 <span className="icon">
//                     <i className="icon-phone3" />
//                 </span>
//                 <div className="desc">
//                     <h3>Student Loan Services <span>Spring 2020</span></h3>
//                     <p>This was a backend project that converted the microservices from SOAP to RESTful API in order to increase performance and use JSON instead of XML.</p>
//                 </div>
//                 </div>
//             </div>
//             <div className="col-md-4 text-center animate-box">
//                 <div className="services color-5">
//                 <span className="icon">
//                     <i className="icon-data" />
//                 </span>
//                 <div className="desc">
//                     <h3>Internship Data Management System <span>Summer 2020</span></h3>
//                     <p>Full stack application using React, Java Spring, MySQL, and PCF. This application is used to manage the data of interns using CRUD methods. 
//                         The admin is able to track data and look at different metrics.</p>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </section>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <h2>Carlton Hunt</h2>
            <h3>Full Stack Software Developer</h3>
            <br></br>
            <p>I'm a recent graduate from Northern Illinois University with a cumlative gpa of 3.01. I have over a year of
                internship exerience at Discover Financial Services as a software developer. My main tech stack is React, Java Spring, MySQL, and AWS.
            </p>
            </div>
            )
        }
    }
    
export default About