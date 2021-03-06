import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/reducers';

const bindMiddleware = (middleware) => {
    if(process.env.NODE_ENV === 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware))
    }

    return applyMiddleware(...middleware);
}

const reducer = (state, action) => {
   if(action.type === HYDRATE) {
       const nextState = {
           ...state,
           ...action.payload
       }
       return nextState
   } else {
       return reducers(state,action)
   }
}

// const initStore = () => {
//     return createStore(reducer, bindMiddleware([thunkMiddleware]))
// }
// create a makeStore function
const initStore = (context) => createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapper = createWrapper(initStore, {debug: true})