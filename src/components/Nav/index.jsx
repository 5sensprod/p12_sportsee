import React from 'react'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  )
}

export default Nav
