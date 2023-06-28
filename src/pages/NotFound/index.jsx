import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './NotFound.module.css'

// Le composant NotFound affiche une page d'erreur 404 personnalisable.

function NotFound({
  message = "Oups ! La page que vous demandez n'existe pas.",
  returnLink = '/',
}) {
  return (
    <main className={styles.error}>
      <p className={styles.errorCode}>404</p>
      <p className={styles.errorMessage}>{message}</p>
      <p className={styles.errorBackLink}>
        <Link to={returnLink}>Retourner sur la page d'accueil</Link>
      </p>
    </main>
  )
}

// Les props du composant NotFound ont des valeurs par défaut, donc .isRequired n'est pas nécessaire

NotFound.propTypes = {
  message: PropTypes.string,
  returnLink: PropTypes.string,
}

export default NotFound
