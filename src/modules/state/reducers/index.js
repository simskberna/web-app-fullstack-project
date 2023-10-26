import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'

const reducers = combineReducers({
    category:categoryReducer
})
export default reducers