import Authenticate from './status/reducer'
import results from './results/reducer'
import sagas from './rootSaga'
import { combineReducers, createStore,compose, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'




const reducers = combineReducers({
    Authenticate,
    results
})


const sagaMiddleWare = createSagaMiddleWare()

sagaMiddleWare.run(sagas)

const composeEnhancer = typeof window === 'object' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
}) : compose;

const enhancer = composeEnhancer(
    applyMiddleware(sagaMiddleWare)
)

const store = createStore(
    reducers,
    enhancer
)

export default store


