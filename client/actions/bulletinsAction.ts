import type { ThunkAction } from '../store'
import { Bulletins } from '../../common/model'
import { addBulletinAPI, fetchBulletinsAPI } from '../apis/ApiClient'

export const REQUEST_BULLETINS = 'REQUEST_BULLETINS'
export const RECEIVE_BULLETINS = 'RECEIVE_BULLETINS'
export const ADD_BULLETIN = 'ADD_BULLETIN'
export const DEL_BULLETIN = 'DEL_BULLETIN'
export const UPDATE_BULLETIN = 'UPDATE_BULLETIN'

export type BulletinsActions =
  |{ type: typeof REQUEST_BULLETINS, payload: null }
  |{ type: typeof RECEIVE_BULLETINS, payload: Bulletins[]}
  |{ type: typeof ADD_BULLETIN, payload: Bulletins }
  |{ type: typeof DEL_BULLETIN, payload: number }
  |{ type: typeof UPDATE_BULLETIN, payload: Bulletins }

  // ACTION CREATORS
export function getAllBulletins(): BulletinsActions { 
    return {
      type: REQUEST_BULLETINS,
      payload:  null    
    }
  }


  // receive an array of objects
export function receiveAllBulletins(bulletin: Bulletins[]): BulletinsActions{
    return {
      type: RECEIVE_BULLETINS,
      payload: bulletin
    }
  }

export function addNewBulletin(bulletin: Bulletins): BulletinsActions {
  return {
    type: ADD_BULLETIN,
    payload: bulletin
  }
}

export function updateBulletin(bulletin: Bulletins): BulletinsActions {
  return {
    type: UPDATE_BULLETIN,
    payload: bulletin
  }
}

export function deleteBulletin(id: number) {
  return {
    type: DEL_BULLETIN,
    payload: id
  }
}



  
  // THUNK
  export function fetchAllBulletins(): ThunkAction{
    return(dispatch) => {
      //this is defined on this page
      dispatch(getAllBulletins())
      //fetch from is api client
      return fetchBulletinsAPI()
        .then((data) => {
          //this is defined on this page
          dispatch(receiveAllBulletins(data))
        })
        .catch((err) => {
          return err.message
        })
    }
  }

  export function addNewAction(item: Bulletins): ThunkAction {
    return(dispatch) => {
      return addBulletinAPI(item).then((data) => {
        dispatch(addNewBulletin(data))
      }) 
      .catch((err) => {
        return err.message
      })
    }
  }

  // DEL THUNK GOES HERE 



      // export function fetchBulletins(): Promise<Bulletins[]> {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       resolve([    {
      //         id: 1,
      //         title: 'TEST1!',
      //         description: 'Last imagined around 2006. Critical to life moving forward',
      //         phone: '0800 456123',
      //         image:
      //           'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cheaptickets.com%2Fblog%2F2015%2F09%2F32-stages-of-planning-a-last-minute-trip%2Fcheap-tickets-32-stages-man-sad-at-computer-600px%2F&psig=AOvVaw07uRYfXm6fl93UlNxMUUrv&ust=1680238858644000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDNmNTvgv4CFQAAAAAdAAAAABAE',
      //       },
      //       {
      //         id: 2,
      //         title: 'TEST2!',
      //         description: 'Last imagined around 2006. Critical to life moving forward',
      //         phone: '0800 456123',
      //         image:
      //           'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cheaptickets.com%2Fblog%2F2015%2F09%2F32-stages-of-planning-a-last-minute-trip%2Fcheap-tickets-32-stages-man-sad-at-computer-600px%2F&psig=AOvVaw07uRYfXm6fl93UlNxMUUrv&ust=1680238858644000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDNmNTvgv4CFQAAAAAdAAAAABAE',
      //       }]);
      //     }, 300);
      //   });
      
      // }