import { ChangeEvent, FormEvent, useState, useEffect } from "react"
import { useAppDispatch } from "../hooks/redux"
import { Bulletins } from "../../common/model"
import { updateBulletinAction } from "../actions/bulletinsAction"

interface Props {
    thing: Bulletins
}

function EditBulletin ({ thing }: Props) {
  
const dispatch = useAppDispatch()
const id = thing.id
const [form, setForm] = useState({} as Bulletins)

useEffect(() => {
    // Update the local state with the new note prop whenever it changes
    setForm(thing);
  }, [thing]);

const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
  setForm({
    ...form,
    [evt.target.id]: evt.target.value,
  })
}

const submitHandler = (evt: FormEvent) => {
  evt.preventDefault()
  dispatch(updateBulletinAction(id, form))
}
  
    return (
    <form onSubmit={submitHandler}>
        <label htmlFor="title">Edit Title</label>
        <input id='title' type="text" value={form.title} onChange={changeHandler} required/>
        <label htmlFor="description">Description</label>
        <input id='description' type="text" value={form.description} onChange={changeHandler} required/>
        <label htmlFor="phone">Phone</label>
        <input id='phone' type="text" value={form.phone} onChange={changeHandler} required/>
        <button>Submit</button>
    </form>
  )
}

export default EditBulletin