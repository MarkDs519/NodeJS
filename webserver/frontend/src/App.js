import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import handlerInp from './handler.js'


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
  const signUpHandler = (event) => {
      event.preventDefault();
      console.log("Uploading info to database...")
      //let data = JSON.stringify(signUpData)
      //console.log("Data", data);
      
      //console.log("Data: ", signUpData)
      
      fetch("/Register/posts", {
        method: "POST",
        mode: "cors", 
        //redirect: 'follow',
        body: JSON.stringify(signUpData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => setSignUpData({data}))
      .then(data => console.log({data}))
      .then(msg => console.log("Message: ", msg))
      .catch(error => console.log(error))
      

      console.log("Fetching done")
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
