import { applyMiddleware,createStore } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension';
  

const middleware =[];

if(process.env.NODE_ENV === "DEVELOPMENT"){
    middleware.push(logger)
}

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;
