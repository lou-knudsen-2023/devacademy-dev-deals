import { combineReducers } from 'redux'
import theReducer from './bulletinsReducer'

// import stuff from './stuff'

export default combineReducers({
  
  currentBulletinState: theReducer
  // stuff
})
