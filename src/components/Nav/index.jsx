import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () => {
  const location = useLocation()

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to={location.pathname}>Accueil</Link>
        </li>
        <li>
          <Link to={location.pathname}>Profil</Link>
        </li>
        <li>
          <Link to={location.pathname}>Réglage</Link>
        </li>
        <li>
          <Link to={location.pathname}>Communauté</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
