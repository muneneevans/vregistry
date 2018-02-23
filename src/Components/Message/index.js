import React from "react"

const messageRender = status => {
	if (status === "error") {
		return (
			<div className="ui negative message">
				<i className="close icon" />
				<div className="header">There was a error in saving the birth</div>
			</div>
		)
	} else if (status === "error") {
		return (
			<div className="ui negative message">
				<i className="close icon" />
				<div className="header">Birth has been successfully saved</div>
			</div>
		)
	} else if (status === "processing") {
		return (
			<div className="ui icon message">
				<i className="notched circle loading icon" />
				<div className="content">
					<div className="header">Processing</div>
					<p>Registering the new child</p>
				</div>
			</div>
		)
	} else if (status === "success") {
		return (
			<div className="ui positive message">				
				<div className="header">Successfully registered the child</div>
			</div>
		)
	}
}

const message = ({ status = "none", primaryMessage, secondaryMessage }) => (
	<div>{messageRender(status)}</div>
)

export default message
