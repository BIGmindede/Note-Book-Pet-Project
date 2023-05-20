import React, { useRef } from 'react'
import classes from './ModalEditnote.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUpdateNotes, selectNotes } from '../../redux/slices/notes'
import { selectDate } from '../../redux/slices/date'

const ModalEditNote = ({status, setStatus}) => {

    const notes = useSelector(selectNotes)

    const field = useRef()

    const dispatch = useDispatch()

    const date = useSelector(selectDate)

    const leadZeores = (val) => {
        return ("0" + val).slice(-2)
    }

    const cur_date = date.getFullYear() + "-" + leadZeores(date.getMonth()) + "-" + leadZeores(date.getDate())

  return (
    <div style={{visibility: status ? "visible" : "hidden", opacity: status ? "1" : "0"}} 
        className={classes.wrap}>
        <div className={classes.form}>
            <textarea ref={field}>{notes}</textarea>
            <button onClick={() => {
                dispatch(fetchUpdateNotes({date: cur_date, value: field.current.value}))
            }}>Сохранить</button>
            <button onClick={() => {setStatus(false)}}>Отменить</button>
        </div>
    </div>
  )
}

export default ModalEditNote