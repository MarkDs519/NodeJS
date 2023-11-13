import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
const eventHandler = require('./handler.js');

function App() {
  // used to navigate to other pages
  //let navigate = useNavigate();
  // create a dataset for login
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
    usernameValid: false,
    passwordValid: false,
    rememberCheckbox: false
  })

  const [signUpData, setSignUpData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    emailValid: false,
    usernameValid: false,
    passwordValid: false
  })

  const [homeData, setHomeData] = useState({
    email: ""
  })

  // Input Change Handler
  var handler = eventHandler();

  // Handle Sign In
  const signIn = e => {
    handler.handleSignInInputChange(e, signInData, setSignInData);
  }

  // Sign Up Input Handler
  const signUp = (e) => {
    handler.handleSignUpInputChange(e, signUpData, setSignUpData);
  }
  // Handle Sign Up
  const signUpHandler = e => {
    handler.handleSignUp(e, signUpData, setSignUpData)
    console.log("final data: ", signUpData)
  }

  const test = event => {
    event.preventDefault();
    const newHomeData = {...homeData}
    newHomeData[event.target.name] = event.target.value
    console.log(newHomeData)
    setHomeData(newHomeData);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login data={signInData} onChange={signIn}/>} />
          <Route path='/login' element={<Login data={signInData} onChange={signIn}/>}/>
          <Route path="/register" element={<Register data={signUpData} onChange={signUp} signUpHandler={signUpHandler}/>} />
          <Route path='/home' element={<Home test={test}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
