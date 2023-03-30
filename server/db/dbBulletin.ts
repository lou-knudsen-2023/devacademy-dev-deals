import connection from './connection'

import { Bulletins } from '../../common/model'

export function getAllBulletinsDB(db = connection): Promise<Bulletins[]> {
  return db('bulletins').select()
}

export function getBulletinByIdDB(
  id: number,
  db = connection
): Promise<Bulletins> {
  return db('bulletins').select('*').where('id', id).first()
}

export function addBulletinDB(
  formData: Bulletins,
  db = connection
): Promise<Bulletins> {
  return db('bulletins')
    .insert(formData)
    .returning(['id', 'title', 'date', 'description', 'phone', 'image'])
}

export function delBulletinDB(id: number, db = connection): Promise<number> {
  return db('bulletins').del().where('id', id)
}

export function updateBulletinDB(
  id: number,
  data: Bulletins,
  db = connection
): Promise<Bulletins[]> {
  return db('bulletins')
    .where('id', id)
    .update(data)
    .returning(['id', 'title', 'date', 'description', 'phone', 'image'])
}
