import { createStore ,combineReducers} from  'redux' 
import movieReducer from '../reducer/movieReducer'
import filterReducer from '../reducer/filterRecuer'

const combien = combineReducers({
     movie : movieReducer,
     filter : filterReducer
})
const store = createStore( combien,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store
