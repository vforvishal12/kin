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
var actionIndex  = Math.floor(Math.random() * 19) ;
var objectUseIndex  = Math.floor(Math.random() * 13) ;


var bodyPartIndex  = Math.floor(Math.random() * 40) ;
var placeIndex  = Math.floor(Math.random() * 19) ;

var actions = ['Massage','Kiss','Touch','Hug','Play','Sex','Rub','Lick','Suck','Smell','Watch','Fuck','Ride','Swallow','Cum','Handjob','Blowjob','Squirt'];
var objectUse = ['Dildo','Toy','Fruits','Pillow','Flower','Chocolate','Condom','Cucumber','Lubricant','Oil','Crème','Strawberry','Banana'];

var bodyPart =[  'Head',	'Face',	'Hair',	'Ear',	'Neck',	'Forehead',	'Beard',	'Eye',	'Nose',	'Mouth',	'Chin',	'Shoulder',	'Elbow',	'Arm',	'Chest',	'Armpit',	'Forearm',	'Wrist',	'Back',	'Navel',	'Toes',	'Ankle',	'Toenail',	'Waist',	'Abdomen',	'Buttock',	'Hip',	'Leg',	'Thigh',	'Knee',	'Foot',	'Hand',	'Thumb',	'Boobs',	'Dick',	'clitoris',		'Breasts',	'Vagina',	'Areola',	'Nipple'];

var place = ['Kitchen',	'Garden',	'Sofa',	'Lobby',	'Bed',	'Desk',	'Bathroom',	'Parking',	'Gallery',	'Office',	'Mall',	'Cinema Hall',	'Taxi',	'Lift',	'Riding Bike',	'Couch',	'Mirror',	'Live-Online',	'wathcing TV'];

	return (
		<div>

		<span class="text-secondary h1"> Use </span>

        <span class="text-danger h1">{objectUse[objectUseIndex]} </span>

		<span class="text-secondary h1"> for </span>

		<span class="text-info h1">{bodyPart[bodyPartIndex]} </span>

        <span class="text-success h1">{actions[actionIndex]}</span>
   

        
        
        <span class="text-secondary h1">, in </span>

        <span class="text-warning h1">{place[placeIndex]}</span>
      	<span class="text-secondary h1">.</span>
       <br/>
		
		
             <Button variant="info" onClick={refreshPage} size="lg">Next Idea</Button>
		<br/><br/>
        </div>
		);



}
export default BodyContent;
