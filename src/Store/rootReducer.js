import { combineReducers } from "redux"

//import reducers from domains
import birthsReducer from "./Births/reducers"

const rootReducer = combineReducers({
	births: birthsReducer
})

export default rootReducer
