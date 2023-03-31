import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchAllBulletins } from '../actions/bulletinsAction'
import {
  useEffect,
  // useState
} from 'react'

import type { Bulletins } from '../../common/model'
import AddBulletin from './AddBulletin'

function MainBoard() {
  const dispatch = useAppDispatch()

  // const [ currentList, setCurrentList ] = useState([] as Bulletins[])

  //look in reducers index.ts
  const bulletinsFromStore = useAppSelector(
    (state) => state.currentBulletinState
  )

  useEffect(() => {
    dispatch(fetchAllBulletins())
  }, [])

  return (
    <>
      <div className="boardWrapper">
        {bulletinsFromStore.map((singleBull: Bulletins) => {
          return (
            <div className="bulletinWrapper" key={singleBull.id}>
              <h2>{singleBull.title}</h2>
              <img src={singleBull.image} alt="listing" />
              <p>{singleBull.description}</p>
              <p>{singleBull.phone}</p>
            </div>
          )
        })}
      </div>
      <div className="formWrapper">{/* <AddBulletin /> */}</div>
    </>
  )
}

export default MainBoard

//call the function from apiClient
// fetchAllBulletins()
// .then((bulletinArray: any) => {
//     setCurrentList(bulletinArray)
// })
// .catch((err: Error) => alert(err.message))
