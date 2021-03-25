export const GET_RESULT_DATA = 'GET_RESULT_DATA'
export const FETCH_RESULT_DATA = 'FETCH_RESULT_DATA'

export function getResultData(payload) {
    return{type:GET_RESULT_DATA,payload}
}

export function fetchResultData(payload) {
    return{type:FETCH_RESULT_DATA,payload}
    
}
