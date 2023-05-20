import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { selectDate, setDate } from '../../redux/slices/date'

const Header = () => {

  const date = useSelector(selectDate)

  const dispatch = useDispatch()

  const leadZeores = (val) => {
    return ("0" + val).slice(-2)
  }


  return (
    <header className={classes.header}>
      <input type='date' className={classes.date_selector} 
        value={date.getFullYear() + "-" + leadZeores(date.getMonth()) + "-" + leadZeores(date.getDate())}
        onChange={(event) => dispatch(setDate(event.target.value))}/>
      <div className={classes.account}>
        <FaUserAlt/>
        <div className={classes.auth_link}>
          <Link to="/login">Выйти</Link>
        </div>
      </div>
    </header>
  )
}

export default Header