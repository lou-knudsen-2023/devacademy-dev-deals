import { 
  // REQUEST_BULLETINS, 
  RECEIVE_BULLETINS, BulletinsActions } from '../actions/bulletinsAction'

import {Bulletins} from '../../common/model'

const initialState: Bulletins[] = [];

function theReducer( state = initialState, action:BulletinsActions) : Bulletins[] | null {
    const { type, payload } = action

    switch (type) {
      // case REQUEST_BULLETINS:
      //   return null;
      case RECEIVE_BULLETINS:
        // return [...state, payload]
        return state.concat(payload);
    // case UPDATE_COLLECTION:
    //   console.log('state before update:', state);
    //   console.log('payload:', payload);
      default: return state
    }

}

export default theReducer