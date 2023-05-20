import axios from 'axios'
import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import classes from './LoginPage.module.css'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const navigate = useNavigate()

    const [inf, setInf] = useState({
        email: "",
        password: ""
    })

    const cookie = new Cookies()

    const login = async () => {
        try {
            const {data} = await axios.post("http://server:8088/login", inf)
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
        <button onClick={login}>Войти</button>
        <Link to="/register">Зарегестрироваться</Link>
    </div>
  )
}

export default LoginPage