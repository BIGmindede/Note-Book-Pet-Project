import React, { useEffect } from 'react'
import classes from './MainPage.module.css'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { selectDate } from '../../redux/slices/date'
import NoteField from '../../components/NoteField/NoteField'

const MainPage = () => {

  const date = useSelector(selectDate)

  const dispatch = useDispatch()

  useEffect(() => {
    
  }, [date])

  return (
    <div className={classes.wrap}>
      <Header/>
      <NoteField/>
    </div>
  )
}

export default MainPage