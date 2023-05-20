import axios from 'axios'
import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import classes from './RegisPage.module.css'
import { Link, useNavigate } from 'react-router-dom'

const RegisPage = () => {

    const navigate = useNavigate()

    const [inf, setInf] = useState({
        email: "",
        password: ""
    })

    const cookie = new Cookies()

    const register = async () => {
        try {
            const {data} = await axios.post("http://server:8088/register", inf)
            cookie.set("token", data.token)
            navigate('/')
        } catch (e) {
        }
    }

  return (
    <div className={classes.wrap}>
        <label htmlFor="">E-mail:
        <input type="email" onChange={(event) => setInf({...inf, email: event.target.value})}/>
        </label>
        <label htmlFor="">Пароль:
        <input type="password" onChange={(event) => setInf({...inf, password: event.target.value})}/>
        </label>
        <button onClick={register}>Зарегестрироваться</button>
        <Link to="/login">Войти</Link>
    </div>
  )
}

export default RegisPage