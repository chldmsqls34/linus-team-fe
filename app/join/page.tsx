'use client';
import React, {useState} from "react";
import './style.css';

export default function Register() {
    const [checked, setChecked] = useState(true);
    const handleCheckChange = () => {
        setChecked(!checked);
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            alert("Passwords do not match");
            return;
        }
    };

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>

            <label htmlFor="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

            <label>
                <input type="checkbox" checked={checked} onChange={handleCheckChange} name="remember"
                       style={{marginBottom: '15px'}}/> Remember me
            </label>

            <p>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue'}}>Terms & Privacy</a>.
            </p>

            <div className="clearfix">
                <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn">Sign Up</button>
            </div>
        </div>
    );
}


