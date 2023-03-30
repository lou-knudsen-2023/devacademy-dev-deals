import { REQUEST_BULLETINS, RECEIVE_BULLETINS, BulletinsActions } from '../actions/bulletinsAction'

import {Bulletins} from '../../common/model'

//array of objects, collectionData is an object
const initialState = [{
  id: 69,
  title: 'TEST!',
  description: 'Last imagined around 2006. Critical to life moving forward',
  phone: '0800 456123',
  image:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cheaptickets.com%2Fblog%2F2015%2F09%2F32-stages-of-planning-a-last-minute-trip%2Fcheap-tickets-32-stages-man-sad-at-computer-600px%2F&psig=AOvVaw07uRYfXm6fl93UlNxMUUrv&ust=1680238858644000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDNmNTvgv4CFQAAAAAdAAAAABAE',
}]
// const initialState: CollectionData[] = [];

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