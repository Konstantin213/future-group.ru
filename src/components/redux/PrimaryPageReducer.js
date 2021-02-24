import {
    ADD_NEW_USER,
    addNewUserToState,
    GET_BIG_DATA,
    GET_SMALL_DATA,
    SET_FIND_USER,
    setBigData,
    setSmallData, setValue
} from "./action";
import {usersAPI} from "../api/api";
import * as _ from 'lodash';
import React from "react";


let initialState = {
    users: [],
    isLoading: false
};
const primaryPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMALL_DATA : {
            return {
                ...state,
                users: action.data,
                isLoading: action.setIsLoading
            }
        }
        case GET_BIG_DATA : {
            return {
                ...state,
                users: action.data
            }
        }
        case ADD_NEW_USER : {
            return {
                ...state,
                users: [action.formValues, ...state.users]
            }
        }
        case SET_FIND_USER : {
            return {
                ...state,
                users: _.filter(state.users, u => {
                    return u.firstName.toLowerCase().includes(action.value.toLowerCase());
                })
            }
        }
        default :
            return state;
    }
}
export const getSmallData = (setIsLoading) => {
        return async (dispatch) => {
            try {
                const data = await usersAPI.getSmallData(setIsLoading)
                dispatch(setSmallData(data, setIsLoading))
            } catch (e) {
                console.log(e)
            }
        }
    }
;export const getBigData = (setIsLoading) => {
    return async (dispatch) => {
        try {
            const data = await usersAPI.getBigData(setIsLoading)
            dispatch(setBigData(data, setIsLoading))
        } catch (e) {
            console.log(e)
        }
    }
};
export const addUser = (formValues) => {
    return async (dispatch) => {
        dispatch(addNewUserToState(formValues))
    }
};

export const searchUser = (value) => {
    return async (dispatch) => {
        dispatch(setValue(value))
    }
};
export default primaryPageReducer