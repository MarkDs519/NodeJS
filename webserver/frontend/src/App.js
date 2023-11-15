import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import handlerInp from './handler.js'
import axios from 'axios';


//const handler = require('./handler.js');

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

  // Handle Sign In
  const signIn = e => {
    handlerInp.handleSignInInputChange(e, signInData, setSignInData);
  }

  // Sign Up Input Handler
  const signUp = (e) => {
    handlerInp.handleSignUpInputChange(e, signUpData, setSignUpData);
  }
  // Handle Sign Up
  const signUpHandler = () => {
      console.log("Uploading info to database...")
      axios.post("http://localhost/Register/addUser", signUpData)
      .then((response) => {
      console.log(response.status, response);
      })
      .then(data => setSignUpData(data))
      .then(msg => console.log(msg))
      .catch(error => console.log(error))
      
      // clear the inputs
      setSignUpData({
          firstname: "",
          lastname: "",
          email: "",
          username: "",
          password: "",
          emailValid: false,
          usernameValid: false,
          passwordValid: false
      });
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
          <Route path="/register" element={<Register data={signUpData} onChange={signUp} handleSignUp={signUpHandler}/>} />
          <Route path='/home' element={<Home test={test}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
