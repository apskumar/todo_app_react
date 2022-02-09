import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

// enable for debug redux;
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(rootReducer,{}, composedEnhancer)


export default store;

// disable for debug
// export default createStore(rootReducer,applyMiddleware(thunkMiddleware))