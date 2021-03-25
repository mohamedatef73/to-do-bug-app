import { GET_RESULT_DATA,fetchResultData } from "./action";

export function* fetchResultWatcher(){
    yield takeLatest(GET_RESULT_DATA,fetchResultWorker)
}

export function* fetchResultWorker(){
    let result = yield fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
   yield put (fetchResultData({data:result}))
}