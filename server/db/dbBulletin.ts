import connection from './connection'

import { Bulletins } from '../../common/model'

export function getAllBulletinsDB(db = connection): Promise<Bulletins[]> {
  return db('bulletins').select()
}

export function getBulletinByIdDB(
  id: number,
  db = connection
): Promise<Bulletins> {
  return db('bulletins').select().where('is', id).first()
}

export function delBulletinDB(id: number, db = connection): Promise<number> {
  return db('bulletins').del().where('id', id)
}

// export function addBulletin()

// export function updateBulletin()
