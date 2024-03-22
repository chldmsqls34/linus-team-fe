'use client';
import React, {useState} from "react";
import './style.css';

export default function Register() {
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

    return (<>
            <div>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <form onSubmit={onFormSubmit}>
                    <label>
                        Email
                        <input
                            type="text"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Password
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Repeat Password
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            required
                        />
                    </label>

                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    );
}

   