import React, { Component } from "react"

import styles from "./style.css"
//import screens here

export default class Login extends Component {
	render() {
		return (
			//add screen inside the div
			<div className={styles.loginScreen}>
				<div className={styles.loginForm}>
					<h1 className={styles.header}>Login</h1>
				</div>
			</div>
		)
	}
}
