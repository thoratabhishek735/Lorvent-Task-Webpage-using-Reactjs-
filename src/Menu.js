import React, { Component } from 'react'
import { Navbar,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "./index.css";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "active",
      name2:"2",
      name3:"3",
      name4:"3"
      
    };
  }
    navactivator = (e) =>{
      if(e.target.className==="1"){
       this.setState({name:"active"})}
      else{
        this.setState({name:"1"})
      }

      if(e.target.className==="2"){
       this.setState({name2:"active"})}
      else{
        
          this.setState({name2:"2"})
        
      }
      if(e.target.className==="3"){
       this.setState({name3:"active"})}
       else{
        this.setState({name3:"3"})
      }
      if(e.target.className==="4"){
       this.setState({name4:"active"})}
       else{
        this.setState({name4:"4"})
      }
  
      
      
      
      
    }
     
    render() {
        return (
            <div>
                <Navbar  className="navbar"bg="light" expand="lg">
  <Navbar.Brand href="#home">Task</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mr-5 navpills">
      <li  onClick={this.navactivator}><Link to="/" className={this.state.name}>HOMEPAGE</Link></ li>
      <li  onClick={this.navactivator}><Link to="Left"className={this.state.name2}>LEFT SIDEBAR</Link></li>
      <li onClick={this.navactivator}><Link to="Right"className={this.state.name3}>RIGHT SIDEBAR</Link></li>
      <li onClick={this.navactivator}><Link to="No"className={this.state.name4}>NO SIDEBAR</Link></li>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
            
            </div>
            
        )
    }
}


