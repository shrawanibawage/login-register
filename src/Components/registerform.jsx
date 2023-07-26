import React, { useState } from "react";

export const Register = (props) => {
    const [Username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setcPass] = useState('');
    const [validationMessage, setValidationMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(Username);
        
            if (pass !== cpass) {
              setValidationMessage("Passwords do not match!");
            } else {
              // Passwords match, you can proceed with registration logic
              // For example: submitRegistrationDataToServer();
              setValidationMessage("Registration successful!");
            }
          };
    

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="Username">Username</label>
            <input value={Username} onChange={(e) => setUsername(e.target.value)}type="Username" placeholder="Username" id="Username" name="Username" /> <br/>
            <label htmlFor="Password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="********" id="Password" name="Password" /> <br/>
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input value={cpass} onChange={(e) => setcPass(e.target.value)} type="Password" placeholder="********" id="confirmPassword" name="confirmPassword" /> <br/>
            <button type="submit">Register</button>
        </form>
        <p>{validationMessage}</p>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}