import { useAppDispatch } from "../hooks/redux"
import {Bulletins} from '../../common/model'
import { ChangeEvent, FormEvent, useState } from "react"

interface Props {
    bulletin: Bulletins
}

function AddBulletin({ bulletin }: Props) {

const dispatch = useAppDispatch()
const id = bulletin.id

const [form, setForm] = useState(bulletin)

const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
  setForm({
    ...form,
    [evt.target.id]: evt.target.value,
  })
}

const submitHandler = (evt: FormEvent) => {
  evt.preventDefault()
  dispatch()
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
