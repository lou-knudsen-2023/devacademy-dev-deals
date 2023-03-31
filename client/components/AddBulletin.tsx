import { useAppDispatch } from "../hooks/redux"
import {Bulletins} from '../../common/model'
import { ChangeEvent, FormEvent, useState } from "react"
import { addNewAction } from "../actions/bulletinsAction"

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
    <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input id='title' type="text" value={form.title} onChange={changeHandler} required/>
        <label htmlFor="description">Description</label>
        <input id='description' type="text" value={form.description} onChange={changeHandler} required/>
        <label htmlFor="phone">Phone</label>
        <input id='phone' type="text" value={form.phone} onChange={changeHandler} required/>
        <button>Submit</button>
    </form>
)
}

export default AddBulletin
