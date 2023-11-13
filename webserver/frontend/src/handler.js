
const validator = require('./validator.js');

var eventHandler = () => {
    var validate = validator();
    // handler function
    var handlerInp = {
        // sign in handler
        handleSignInInputChange: (event, signInData, setData) => {
            event.preventDefault();
            // change the state as the user types in the data and simultaneously insert the values inside the state
            const newData = {...signInData};
            // USERNAME VALIDATION
            if(event.target.name === "username"){
                if(validate.isValidUsername(event)===true){
                    newData[event.target.name] = event.target.value;
                    // set username valid to true
                    newData["usernameValid"] = true;
                }
                else{
                    newData["usernameValid"] = false;
                }
            }

            // PASSWORD VALIDATION
            if(event.target.name === "password"){
                if(validate.isValidPassword(event)===true){
                    newData[event.target.name] = event.target.value;
                    // set username valid to true
                    newData["passwordValid"] = true;
                }
                else{
                    newData["passwordValid"] = false;
                }
            }

            // check if Remember me checkboc is checked and set the state of the checkbox to true
            event.target.name === "rememberCheckbox" ? newData[event.target.name] = event.target.checked : newData[event.target.name] = event.target.value;
            console.log(newData);
            setData(newData);
        },
        // sign up handler
        handleSignUpInputChange: (event, signUpData, setData) => {
            event.preventDefault();
            const newSignUpData = {...signUpData};
            // EMAIL VALIDATION
            if(event.target.name === "email"){
                if(validate.isValidEmail(event)===true){
                    newSignUpData[event.target.name]=event.target.value;
                    newSignUpData["emailValid"]=true;
    
                } else{
                    console.log("Length of email: ", newSignUpData[event.target.name].length)
                    newSignUpData["emailValid"] = false
                }
            }

            // USERNAME VALIDATION
            if(event.target.name === "username"){
                if(validate.isValidUsername(event)===true){
                    newSignUpData[event.target.name] = event.target.value;
                    // set username valid to true
                    newSignUpData["usernameValid"] = true;
                }
                else{
                    newSignUpData["usernameValid"] = false;
                }
            }

            // PASSWORD VALIDATION
            if(event.target.name === "password"){
                if(validate.isValidPassword(event)===true){
                    newSignUpData[event.target.name] = event.target.value;
                    // set username valid to true
                    newSignUpData["passwordValid"] = true;
                }
                else{
                    newSignUpData["passwordValid"] = false;
                }
            }

            // for all other things
            newSignUpData[event.target.name] = event.target.value;
            console.log(newSignUpData);
            setData(newSignUpData);
            //return newSignUpData;  
        },

        handleSignUp: (event, signUpData, setData) => {
            console.log("Submitting the data..")
            // prevent the webpage from refreshing too fast
            event.preventDefault();
            
            fetch("http://192.168.50.68:3000", {
              method: "POST",
              body: JSON.stringify(signUpData),
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            })
            .then(response => response.json())
            .then(data => setData(data))
            .then(msg => console.log("MESSAGE ERROR!!!: ", msg))
            .catch(error => console.log("ERROR!!!", error))
            
        
            // clear the inputs
            setData({
                firstname: "",
                lastname: "",
                username: "",
                email: "",
                password: "",
                emailValid: false,
                usernameValid: false,
                passwordValid: false
            });
        
          }
    }
    return handlerInp;
}

module.exports = eventHandler;