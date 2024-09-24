import React from 'react';
import Button from 'react-bootstrap/Button';
//import Accordion from 'react-bootstrap/Accordion';
//import Card from 'react-bootstrap/Card'; 
//import MyCards from './MyCards';
//import MyCardGroup from './MyCardGroup';
//className="bg-light text-white"

import Card from 'react-bootstrap/Card';

function refreshPage() {
    window.location.reload(false);
  }

	var state={ NumberHolder : 1 };
function BodyContent(){
	const numbers = ['a','b','c','d'];



var breakfastIndex  = Math.floor(Math.random() * 33) ;
var mainMenuIndex  = Math.floor(Math.random() * ) ;

var breakfast = ['Dal Tadka', 'Rajma Chawal', 'Aloo Gobhi', 'Chole', 'Paneer Butter Masala', 'Bhindi Masala', 'Baingan Bharta', 'Jeera Aloo', 'Kadhi Pakora', 'Palak Paneer', 'Mutter Paneer', 'Lauki Kofta', 'Aloo Matar', 'Gajar Matar', 'Tawa Sabzi', 'Methi Aloo', 'Pindi Chole', 'Stuffed Paratha', 'Aloo Baingan', 'Mix Veg', 'Dhuska', 'Fruit Salad', 'Tehri', 'Biryani', 'Pizza', 'Aaloo Paratha', 'Daal Bhaat Choka', 'Pulow', 'Chinnese', 'Crispy Chilly Baby Corn', 'Fasting', 'Dahi Bara', 'Bhindi', 'Aalo Dum', 'Aaloo Bhujiya','Idli','Doosa'];
var mainMenu = ['Poha', 'Paratha - Bhujia', 'Chilla', 'Bread Butter Jam', 'Bread Chai', 'Sandwich', 'Poori Sabzi', 'Maggie', 'Aloo Paratha', 'Dhokla', 'Pav Bhaji'];

	return (
		<div>

		<span class="text-secondary h1"> Breakfast </span>

        <span class="text-danger h1">{breakfast[breakfastIndex]} </span>

		<span class="text-secondary h1">  </span>
 <br/>
	
<span class="text-secondary h1"> Lunch </span>
        <span class="text-success h1">{mainMenu[mainMenuIndex]}  </span>

		<span class="text-secondary h1">  </span>
 <br/>
	<span class="text-secondary h1"> Dinner </span>
<span class="text-info h1">{mainMenu[mainMenuIndex]}</span>

   

        
        
        <span class="text-secondary h1"></span>
       <br/>
		
		
             <Button variant="info" onClick={refreshPage} size="lg">Next Idea</Button>
		<br/><br/>
        </div>
		);



}
export default BodyContent;
