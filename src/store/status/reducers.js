import * as actions from './actions'

const initialState = {
    isLoggingIn: false,
    student: {}
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_STUDENT_STATUS:
            return { ...state, isLoggingIn: action.payload }

        case actions.SET_STUDENT_DATA:
            return { ...state, student: action.payload }
        default:
            return state

    }
}