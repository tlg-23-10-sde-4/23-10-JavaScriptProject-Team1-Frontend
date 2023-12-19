import React, { useState } from "react";
import Styles from "./login.css"

function LoginPage() {
    const [formState, setFormState] = useState({userEmail: "", password: ""});

    const handleChange = (evt) => {
        const{name, value} = evt.target;
        setFormState({...formState, [name]: value});
    }
    
    const handleFormSubmit = async (e) => {
        // prevent the forms default
        e.preventDefault();


        // set the username and password from the input fields 
        const data = {
            userEmail: formState.userEmail,
            password: formState.password
        }
        console.log(data);

       // Post for response and if for error codes

    //     const response = await fetch("http://localhost:3001/login", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }
    //     );

    //     const resData = response.json()
        
    //     if(response.status === 400) {
    //         // 400 bad request | credentials or password
    //         // const errorText = await response.text();
    //         console.log("Username or Password is not recognized")
    //         // console.log(resData.message)
    //     } else if (response.status === 404) {
    //         // serverside request not found.
    //         console.log("The page cannot be loaded or found, sorry.")
    //     }
    //     if(response.status === 500) {
    //         // internal server error
    //         console.log("I think our servers are down.")
    //     }
    }

    return (
        <>
        {/* is this working */}
            <div className="card-container border">
                <form className="card" onSubmit={handleFormSubmit} style={{width: "18rem"}}>
                <div className="mb-3 row">
                        <label htmlFor="userEmail" className="col col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="text" required className="form-control" id="userEmail" name="userEmail" onChange={handleChange} placeholder="email@example.com" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label htmlFor="password" className="col col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" name="password" id="password" onChange={handleChange} placeholder="SunnySunShine232" value={formState.password} />
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Log In" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginPage;