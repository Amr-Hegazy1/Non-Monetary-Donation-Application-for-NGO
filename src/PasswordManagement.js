import { React, useState} from 'react';
import './PasswordManagment.css';




const PasswordManagement = () => {

  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [customValidity, setCustomValidity] = useState("");
  const [submitButtonVisibility, setSubmitButtonVisibility] = useState(true);
  const [loaderStyle, setLoaderStyle] = useState("none");

  

  
  
  function validatePassword() {
    if(password != confirm_password) {
      setCustomValidity("Passwords Don't Match");
      return false;
    } else {
      setCustomValidity('');
      return true;
    }
  }
  
  
  
  function enableSubmitButton() {
    setSubmitButtonVisibility(false);
    setLoaderStyle("none")
  }
  
  function disableSubmitButton() {
    setSubmitButtonVisibility(true);
    setLoaderStyle("unset")
  }
  
  function validateSignupForm() {
    console.log("confirm button clicked")
    
    if (!validatePassword()) {
      return false;
    }
    
    onSignup();
  }
  
  function onSignup() {
   
    
      
      
        enableSubmitButton();
      
      
    
    
    
  
  
  };

    return (
        <>
            <div className="mainDiv">
            <div className="cardStyle">
            <form action="" method="post" name="signupForm" id="signupForm">
            
            <img src="logo192.png" id="signupLogo"/>
            
            <h2 className="formTitle">
                Change your Password
            </h2>
            
            <div className="inputDiv">
            <label className="inputLabel" for="password">New Password</label>
            <input type="password" id="password" name="password" required onChange={(e) => {setPassword(e.text)}} />
            </div>
            
            <div className="inputDiv">
            <label className="inputLabel" for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" onChange={(e) => (setConfirmPassword(e.text))} />
            </div>
            
            <div className="buttonWrapper">
            <button type="submit" id="submitButton" onClick={() => {validateSignupForm()}} className="submitButton pure-button pure-button-primary">
                <span>Continue</span>
                {/* <span id="loader" style={{display: loaderStyle}}></span> */}
            </button>
            </div>
            
        </form>
        </div>
        </div>
        </>);
}

export default PasswordManagement;


