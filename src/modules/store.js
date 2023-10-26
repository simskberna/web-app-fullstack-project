 
import { configureStore , applyMiddleware} from '@reduxjs/toolkit'
import reducers from './state/reducers/index' 
import thunk from 'redux-thunk'

const store = configureStore(
    {reducer:reducers},
    {},
    applyMiddleware(thunk)
) 
export default store