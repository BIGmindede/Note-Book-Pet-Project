import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddNotes, fetchNotes, selectNotes } from '../../redux/slices/notes'
import { selectDate } from '../../redux/slices/date'
import classes from './NoteField.module.css'
import ModalEditNote from '../ModalEditNote/ModalEditNote'

const NoteField = () => {

    const dispatch = useDispatch()

    const notes = useSelector(selectNotes)

    const date = useSelector(selectDate)

    const leadZeores = (val) => {
        return ("0" + val).slice(-2)
    }

    const cur_date = date.getFullYear() + "-" + leadZeores(date.getMonth()) + "-" + leadZeores(date.getDate())

    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        try {
            dispatch(fetchNotes(cur_date))
        } catch (e) {
            dispatch(fetchAddNotes({date: cur_date, value: {notes: ""}}))
        }
    }, [date])

  return (
    <div className={classes.wrap}>
        <ModalEditNote status={isEditing} setStatus={setIsEditing}/>
        <textarea className={classes.field} disabled >{notes}</textarea>
        <button onClick={() => setIsEditing(true)}>Изменить</button>
    </div>
  )
}

export default NoteField