import React, { Component } from "react"
import moment from "moment"
import DatePicker from "react-datepicker"
import styles from "./style.css"

class newBirth extends Component {
	constructor(props) {
		super(props)
		this.state = {
			newBirth: {
				birthNotificationNumber: this.generateUUID(),
				childFirstName: "",
				childLastName: "",
				childMiddleName: "",
				sex: "",
				dateOfBirth: moment(),
				natureOfBirth: "",
				placeOfBirth: "",
				birthNotificationIssuedTo: "",
				nameOfMother: "",
				motherPhoneNumber: "",
				motherIdNumber: "",
				organisationUnitId: "T3JnYW5pc2F0aW9uVW5pdE5vZGU6MTIwNDE4"
			}
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleDateChange = this.handleDateChange.bind(this)
	}

	generateUUID() {
		let d = new Date().getTime()
		let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
			c
		) {
			let r = ((d + Math.random() * 16) % 16) | 0
			d = Math.floor(d / 16)
			return (c == "x" ? r : (r & 0x3) | 0x8).toString(16)
		})
		return uuid
	}

	handleSubmit() {
		this.props.newBirth({})
	}

	message(newBirthProcess) {
		if (newBirthProcess.status === "error") {
			return (
				<div className="ui negative message">
					<i className="close icon" />
					<div className="header">There was a error in saving the birth</div>
				</div>
			)
		} else if (newBirthProcess.status === "error") {
			<div className="ui negative message">
				<i className="close icon" />
				<div className="header">Birth has been successfully saved</div>
			</div>
		} else if (newBirthProcess.status === "processing") {
			<div className="ui info message">
				<div className="ui active inline loader" />
				<div class="header">Processing</div>
			</div>
		}
	}

	handleChange(event) {
		let property = this.state.newBirth
		property[event.target.name] = event.target.value
		this.setState({
			...this.state,
			newBirth: {
				...this.state.newBirth,
				newBirth: property
			}
		})
	}
	handleDateChange(date) {
		let property = this.state.newBirth
		property.dateOfBirth = date
		this.setState({
			...this.state,
			newBirth: {
				...this.state.newBirth,
				newBirth: property
			}
		})
	}

	render() {
		return (
			<div className={styles.newBirthScreen}>
				<div className="ui equal width center aligned padded grid">
					<h1>New Birth</h1>
				</div>
				{this.message(this.props.newBirthProcess)}
				<div>
					<form className="ui form">
						<h4 className="ui dividing header">Child Information</h4>
						<div className="field">
							<div className="three fields">
								<div className="field">
									<label>First Name</label>
									<input
										name="childFirstName"
										placeholder="First Name"
										type="text"
										onChange={this.handleChange}
									/>
								</div>
								<div className="field">
									<label>Last Name</label>
									<input
										name="childLastName"
										placeholder="Last Name"
										type="text"
										onChange={this.handleChange}
									/>
								</div>
								<div className="field">
									<label>Middle Name</label>
									<input
										name="childMiddleName"
										placeholder="Middle Name"
										type="text"
										onChange={this.handleChange}
									/>
								</div>
							</div>
						</div>
						<div className="field">
							<label>Sex</label>
							<select
								name="sex"
								className="ui fluid dropdown"
								onChange={this.handleChange}
							>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>

						<h4 className="ui dividing header">Birth Information</h4>
						<div className="field">
							<label>Date of birth</label>							

							<DatePicker
								name="dateOfBirth"
								selected={this.state.newBirth.dateOfBirth}
								onChange={this.handleChange}
							/>
						</div>
						<div className="field">
							<label>Nature of birth</label>
							<input
								name="natureOfBirth"
								placeholder="Nature of birth"
								type="text"
								onChange={this.handleChange}
							/>
						</div>
						<div className="field">
							<label>Place of birth</label>
							<input
								name="placeOfBirth"
								placeholder="Place of birth"
								type="text"
								onChange={this.handleChange}
							/>
						</div>
						<div className="field">
							<label>Birth notification issued to</label>
							<input
								name="birthNotificationIssuedTo"
								placeholder="Birth notification issued to"
								type="text"
								onChange={this.handleChange}
							/>
						</div>

						<h4 className="ui dividing header">Mother Information</h4>
						<div className="field">
							<div className="three fields">
								<div className="field">
									<label>Name of mother</label>
									<input
										name="nameOfMother"
										placeholder="Name of mother"
										type="text"
										onChange={this.handleChange}
									/>
								</div>
								<div className="field">
									<label>Mother phone number</label>
									<input
										name="motherPhoneNumber"
										placeholder="Mother phone number"
										type="text"
										onChange={this.handleChange}
									/>
								</div>
								<div className="field">
									<label>Mother ID</label>
									<input
										name="motherIdNumber"
										placeholder="Mother ID"
										type="text"
										onChange={this.handleChange}
									/>
								</div>
							</div>
						</div>
					</form>
					<button className="ui button" onClick={this.handleSubmit}>
						Save
					</button>
				</div>
			</div>
		)
	}
}
export default newBirth
