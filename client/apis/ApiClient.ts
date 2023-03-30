import request from 'superagent'
import { Bulletins } from '../../common/model'

const URL = '/api/v1/bulletins/'

//fetch

export function fetchBulletinsAPI() {
  return request
    .get(URL)
    .then((res) => res.body)
    .catch((err) => err.message)
}

//add
