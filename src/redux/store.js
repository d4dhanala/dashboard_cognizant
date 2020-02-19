import { createStore , applyMiddleware , compose} from 'react'
import createSagaMiddleware from 'redux-saga'

const initialState = {}

const configureStore = () => {
       const sagaMiddleware = createSagaMiddleware()
       const store = createStore(
              initialState,
              compose(
                     applyMiddleware(sagaMiddleware),
                     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
              )
       )

}

export default configureStore
