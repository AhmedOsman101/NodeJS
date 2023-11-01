/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/styles/form.css";

export default function Form() {
	return (
		<>
			<div className="login-box">
				<form action="http://localhost:5010/User/Add" method="post">
					<center>
						<h1 className="title">Login</h1>
					</center>
					<div className="user-box">
						<input
							type="text"
							name="username"
							required=""
							placeholder=" "
						/>
						<label>Username</label>
					</div>
					<div className="user-box">
						<input
							type="email"
							name="email"
							required=""
							placeholder=" "
						/>
						<label>Email</label>
					</div>
					<div className="user-box">
						<input
							type="password"
							name="password"
							required=""
							placeholder=" "
						/>
						<label>Password</label>
					</div>
					<center>
						<button type="submit" className="submit">
							SEND
							<span></span>
						</button>
					</center>
				</form>
			</div>
		</>
	);
}
