import React, {useState} from "react";
import axios from "axios";


function Register(){
	const [RegisterData, setData] = useState({
		email: "",
		password: "", 
		password1: ""
	});

	function handleChange(event){
		const {name, value} = event.target;
		setData({
			...RegisterData, [name]: value
		});
	}

	function register(){
		const {email, password , password1} = RegisterData;
		if (email && password && password1 && (password === password1)) {
			axios.post("http://localhost:9000/register",
				RegisterData).then( res => alert(res.data.message))
		} else{
			alert("Invalid validation");
		}

	}

	return <>
	<div className="login">
	<div className="container1 height-register">
	<h1>USER REGISTER</h1>

	<div class="ui input">
	<input type="text" 
	placeholder="Enter Email" 
	name="email"
	onChange={handleChange}
	value={RegisterData.email}
	/>

	</div><br/>

	<div class="ui input">
	<input type="password" 
	placeholder="Enter password" 
	name="password"
	onChange={handleChange}
	value={RegisterData.password}
	/>

	</div><br/>
	<div class="ui input">
	<input type="password"
	 placeholder="Re-enter password" 
	 name="password1"
	 onChange={handleChange}
	 value={RegisterData.password1}
	 />
	</div><br/>

	<button className="login-button" onClick={register}>Submit</button>
	</div>    
	</div>
	</>
}

export default Register