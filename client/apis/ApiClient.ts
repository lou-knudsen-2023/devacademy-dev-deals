import request from 'superagent'
import { Bulletins } from '../../common/model'

const URL = '/api/v1/bulletins/'

//fetch
export function fetchBulletinsAPI() {
  return request
    .get(URL)
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}

//add
export function addBulletinAPI(newBulle: Bulletins) {
  return request
    .post(URL)
    .send(newBulle)
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}

//delete
export function delBulletinAPI(id: number) {
  return request
    .delete(`/api/v1/bulletins/${id}`)
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}

//update
export function updateBulletinAPI(
  id: number,
  newStuff: Bulletins
): Promise<Bulletins> {
  return request
    .patch(`/api/v1/bulletins/${id}`)
    .send(newStuff)
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}
