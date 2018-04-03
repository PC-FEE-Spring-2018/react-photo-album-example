import {createStore} from 'redux'

import albumReducer from './reducers/albumReducer'

const store = createStore(albumReducer)

export default store