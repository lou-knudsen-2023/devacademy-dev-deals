import type { ThunkAction } from '../store'
import { Bulletins } from '../../common/model'
import { addBulletinAPI, delBulletinAPI, fetchBulletinsAPI, updateBulletinAPI } from '../apis/ApiClient'

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

  export function updateBulletinAction(id: number, item: Bulletins): ThunkAction {
    return (dispatch) => {
      return updateBulletinAPI(id, item)
      .then((xoxo) => {
        dispatch(updateBulletin(xoxo))
      })
      .catch((err) => {
        return err.message
      })
    }
  }

  export function delBulletinAction(id: number): ThunkAction {
    return (dispatch) => {
      return delBulletinAPI(id)
      .then(() => {
        dispatch(deleteBulletin(id))
      })
      .catch((err) => {
        return err.message
      })
    }
  }