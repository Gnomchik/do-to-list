import React from 'react'
import style from './css/HeaderNav.module.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
          <nav className={style.navbar}>
            <div className={style.navBox}>
              <img src="./Img/logo.png" className={style.logo} />
              <ul className={style.navLinks}>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to ="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to = "tasks">Tasks</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="search">Search</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="about">About</NavLink>
                </li>
              </ul>
            </div>
            <ul className={style.navLinks +" "+style.NavShow}>
              <li className={style.Links}>
                <p className="nav-link">Phone: +998 (97) 407-44-98</p>
              </li>
            </ul>
          </nav>
             
    </header >
  )
}
