import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import CardProfile from "./components/CardProfile";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; //npm install


function App() {
  const [user, setLoginUser] = useState({});
  return (
    <>
    <Header />
    <Router>
      <Switch>
      
        <Route exact path="/"> 
        {(user && user._id)  ? <CardProfile /> : <Login setLoginUser={setLoginUser} />  }
       </Route>
        <Route exact path="/login"><Login setLoginUser={setLoginUser} /></Route>
        <Route exact path="/card"><CardProfile /></Route>
        <Route exact path="/register"><Register/></Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
