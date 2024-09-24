import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';

function Footer(){

//let currTime = new Date().toLocaleString();
	return (
<Navbar bg="success" variant="dark">
  
  
  <Navbar.Collapse>
    <Navbar.Text>
      Email - <a href="mailto:vforvishal12@gmail.com" >vforvishal12@gmail.com</a>
    </Navbar.Text>
  </Navbar.Collapse>

 

<Navbar.Collapse>
  
    <Navbar.Text>
      © Copyright vsaw 2024. Designed and Developed by : <a href="https://linkedin.com/in/vsaw" >Vishal Saw</a>
    </Navbar.Text>
		 </Navbar.Collapse>
</Navbar>
		);
}

export default Footer;
