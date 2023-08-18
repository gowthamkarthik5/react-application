import { FETCH_USER_DATA, SET_USER_DATA } from "./constants";

export const fetchData = () => ({
    type: FETCH_USER_DATA
})

export const setData = data => ({
    type: SET_USER_DATA,
    data
})
