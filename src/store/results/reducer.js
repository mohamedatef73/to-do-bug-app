import * as actions from './action'

const initialState = {
    results: []
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_RESULT_DATA:
            return { ...state, results: action.type.data }
        default:
            return state
    }
}
