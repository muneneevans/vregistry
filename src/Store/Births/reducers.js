import * as types from "./actionTypes"
import Immutable from "seamless-immutable"
import { combineReducers } from "redux"

const initialState = Immutable({
	births: [],
	newBirthProcess: { status: "idle" }
})

export const birthsReducer = (state = initialState, action = {}) => {
	switch (action.type) {
	case types.NEW_BIRTH_REQUEST:
		return state.merge({
			newBirthProcess: { status: "processing" }
		})
	case types.NEW_BIRTH_SUCCESS:
		return state.merge({
			births: addNewBirthToList(action.newBirth, state.births),
			newBirthProcess: { status: "success" }
		})
	case types.NEW_BIRTH_ERROR:
		return state.merge({
			newBirthProcess: {
				status: "error",
				data: action.errors
			}
		})

	case types.BIRTH_LIST_SUCCESS:
		return state.merge({
			births: action.births
		})
	default:
		return state
	}
}

const addNewBirthToList = (newBirth, birthsList) => {
	let newList = Immutable.asMutable(birthsList, { deep: true })
	newList.push(newBirth)
	return newList
}

export default combineReducers({ births: birthsReducer })
