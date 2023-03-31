import { useAppDispatch } from '../hooks/redux'
import { Bulletins } from '../../common/model'
import { ChangeEvent, FormEvent, useState } from 'react'
import { addNewAction } from '../actions/bulletinsAction'

interface Props {
  bulletin: Bulletins
}

function AddBulletin() {
  const dispatch = useAppDispatch()

  const [form, setForm] = useState({} as Bulletins)

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [evt.target.id]: evt.target.value,
    })
  }

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(addNewAction(form))
  }

  return (
    <>
      <div className="formWrapper">
        <h2>Add a bulletin</h2>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={form.title}
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              id="description"
              type="text"
              value={form.description}
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="text"
              value={form.phone}
              onChange={changeHandler}
              required
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default AddBulletin
