import React from "react"
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter,
	Switch
} from "react-router-dom"
import Births from "../Births"

const AuthExample = () => (
	<Router>
		<div>
			{/* <AuthStatus />
			<ul>
				<li>
					<Link to="/public">Public Page</Link>
				</li>
				<li>
					<Link to="/protected">Protected Page</Link>
				</li>
			</ul> */}
			<Switch>
				<Route path="/public" component={Public} />
				<Route path="/public" component={Public} />
				<Route path="/births" component={Births} />
				<Route path="/login" component={Login} />
				<PrivateRoute path="/protected" component={Protected} />
				<Route path="/" component={Births} />
			</Switch>
		</div>
	</Router>
)

const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true
		setTimeout(cb, 100) // fake async
	},
	signout(cb) {
		this.isAuthenticated = false
		setTimeout(cb, 100)
	}
}

const AuthStatus = withRouter(
	({ history }) =>
		fakeAuth.isAuthenticated ? (
			<p>
				Welcome!{" "}
				<button
					onClick={() => {
						fakeAuth.signout(() => history.push("/"))
					}}
				>
					Sign out
				</button>
			</p>
		) : (
			<p>You are not logged in.</p>
		)
)

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			fakeAuth.isAuthenticated ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: "/login",
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
	state = {
		redirectToReferrer: false
	}

	login = () => {
		fakeAuth.authenticate(() => {
			this.setState({ redirectToReferrer: true })
		})
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: "/" } }
		const { redirectToReferrer } = this.state

		if (redirectToReferrer) {
			return <Redirect to={from} />
		}

		return (
			<div>
				<p>You must log in to view the page at {from.pathname}</p>
				<button onClick={this.login}>Log in</button>
			</div>
		)
	}
}

export default AuthExample
