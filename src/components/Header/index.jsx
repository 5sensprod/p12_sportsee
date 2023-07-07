import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Logo from '../Logo'
import Nav from '../Nav'

/**
 * Header est un composant qui affiche le logo du site et la navigation.
 * Le logo est un lien qui renvoie à la page d'accueil.
 */
const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
    </header>
  )
}

export default Header
