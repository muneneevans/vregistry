import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styles from "./style.css"

import * as birthActions from "../../Store/Births/actions"
import * as birthSelectors from "../../Store/Births/selectors"

import NewBirth from "../../Components/NewBirths"
import Banner from "../../Components/Banner"
import BirthsSideBar from "../../Components/BirthsMenu"
import BirthsList from "../../Components/BirthsList"

class Births extends Component {
	componentDidMount() {}

	newBirth(birthDetails) {
		this.props.birthActions.newBirth(birthDetails)
	}

	render() {
		return (
			<div className={styles.birthScreen}>
				<Banner title="Births" secondaryText="manage children birth records" />
				<div className={styles.contentScreen}>
					<div className="ui two column centered grid ">
						<div className="row">
							<div className="column three wide">
								<BirthsSideBar />
							</div>

							<div className="column eight wide">
								<Route
									path={this.props.match.path + "/new"}
									render={() => (
										<NewBirth
											newBirth={this.newBirth.bind(this)}
											newBirthProcess={this.props.newBirthProcessStatus}
										/>
									)}
								/>
								<Route
									path={this.props.match.path + "/list"}
									render={() => (
										<BirthsList
											newBirth={this.newBirth.bind(this)}
											newBirthProcess={this.props.newBirthProcessStatus}
										/>
									)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		births: birthSelectors.getBirths(state.births),
		newBirthProcessStatus: birthSelectors.getNewBirthProcess(state.births)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		birthActions: bindActionCreators(birthActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Births)
