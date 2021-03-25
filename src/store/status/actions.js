export const GET_STUDENT_STATUS = 'GET_STUDENT_STATUS'
export const SET_STUDENT_DATA = 'SET_STUDENT_DATA'


export  function getSudentStatus(payload) {
    return {
        type:GET_STUDENT_STATUS,payload
    }
}

export  function setStudentData(payload) {
    return{
        type:SET_STUDENT_DATA,payload
    }
}
