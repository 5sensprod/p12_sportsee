import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

/**
 * Nav est un composant qui affiche une barre de navigation.
 * Il utilise l'API du navigateur pour déterminer le chemin d'accès actuel et
 * ajuste le comportement du lien en conséquence.
 */
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
