import React, { useEffect } from 'react'
import classes from './MainPage.module.css'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { selectDate } from '../../redux/slices/date'
import NoteField from '../../components/NoteField/NoteField'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {

  const cookie = new Cookies()

  const navigate = useNavigate()

  useEffect(() => {
    if (!cookie.get("token")) navigate('/login')
  }, [cookie.get("token")])

  return (
    <div className={classes.wrap}>
      <Header/>
      <NoteField/>
    </div>
  )
}

export default MainPage