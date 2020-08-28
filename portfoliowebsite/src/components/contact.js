import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBFooter, MDBIcon, MDBRow } from 'mdbreact';

class Contact extends Component {
    state = {
        modal: false
      }
      
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
      
    render() {
        return (
            <MDBContainer>
            <MDBBtn onClick={this.toggle} rounded color="info" size="lg">Lets work together!</MDBBtn>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader toggle={this.toggle}><h4 style={{color: "black"}}>Contact Info</h4></MDBModalHeader>
              <MDBModalBody>
              <MDBInput icon="envelope" group type="email" value="crltnhnt@gmail.com"/>
              <MDBInput icon="phone" value="779-770-8088" />
              </MDBModalBody>
              <MDBFooter>
                <MDBRow center="true">
                    <a href="https://drive.google.com/file/d/18wnKOggp5EcPuyQu4rPISqeKWP8pbmGC/view" style={{color: "#5d8aa8"}}><MDBIcon icon="cloud-download-alt" size="4x" color="indigo-text"/></a>
                    <a href="https://www.github.com/Crltnhnt" style={{color: "black"}}><MDBIcon fab icon="github-square" size="4x" color="indigo-text"/></a>
                    <a href="https://www.linkedin.com/in/carlton-hunt-505297ab/" style={{color: "#0e76a8"}}><MDBIcon fab icon="linkedin" size="4x" color="indigo-text"/></a>
                </MDBRow>
              </MDBFooter>
            </MDBModal>
          </MDBContainer>
            )
        }
    }
    
export default Contact;
