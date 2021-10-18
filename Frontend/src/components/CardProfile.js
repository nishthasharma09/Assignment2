import React, {useState} from "react";
import Card from "./Card";
import axios from "axios";

function CardProfile(){

	function handleLoad(){
		axios.post("https://randomuser.me/api/?results=10").then(res => console.log(res) );
	}
	
	return <>
	<div onLoad="handleLoad" class="ui link cards container">
	<Card
	name="Arushi"
	tel="7251926213"
	email="arushi@cctech.co.in"/>
	<Card
	name="Arushi"
	tel="7251926213"
	email="arushi@cctech.co.in"/>
	<Card
	name="Arushi"
	tel="7251926213"
	email="arushi@cctech.co.in"/>
	<Card
	name="Arushi"
	tel="7251926213"
	email="arushi@cctech.co.in"/>
</div>
	</>
}

export default CardProfile;