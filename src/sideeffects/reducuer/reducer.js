import { SET_USER_DATA } from "../actions/constants"

let users = []

export const fetchUserReducer = (data = users, action) => {
    if(action.type === SET_USER_DATA)
        return action.data
    else
        return data
}