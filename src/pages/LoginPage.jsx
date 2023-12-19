import React from "react";
import Styles from "./login.css"

function LoginPage() {
    return (
        <>
        {/* is this working */}
            <div className="card-container border">
                <div className="card" style={{width: "18rem"}}>
                <div className="mb-3 row">
                        <label for="staticEmail" className="col col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="text" required className="form-control" id="staticEmail" placeholder="email@example.com" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputPassword" className="col col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;