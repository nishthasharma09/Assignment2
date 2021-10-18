//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));


//connecting to db
mongoose.connect("mongodb://localhost:27017/UserDB");

//schema
const userSchema = new mongoose.Schema({
	email: String,
	password: String 
});

//model creation
const User = mongoose.model("User", userSchema);

//post requests


///////// LOGIN USER //////
app.post("/login", function(req, res){
	const {email, password} = req.body;

	User.findOne( {email:email} , (err, foundUser) => {
		if (foundUser){
			if(password === foundUser.password) {
				res.send( {message: "Login successfull", user: foundUser });
			} else{
				res.send( {message: "Wrong password"} );
			}
		} else{
			res.send({ message: "User not registered"});
		}
	})
});



/////   REGISTER USER  ///////////
app.post("/register", function(req, res){
	const { email, password, password1 }  = req.body;
	
	User.findOne({email:email}, (err, user) => {
		if (user){
			res.send( {message: "User already registered"} );
		} else{
			const user = new User({
				email: email,
				password: password1, 
			});
			user.save(err => {
				if(err){
					console.log(err)
				} else{
					res.send( {message: "Successfully Resgistered"} )
				}
			});
		}
	});
});

app.listen(9000, function(req,res){
	console.log("server started at 9000")
});
