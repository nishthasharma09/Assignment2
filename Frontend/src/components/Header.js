import React from "react";

function Header(){
	return <>
	<nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="">Cards</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
        <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/register">Signup</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/login">Logout</a>
        </li>
    </ul>
 </div>
</nav>
	</>
}

export default Header;