import React from 'react'
import styles from './Logo.module.css'
import LogoImg from '../../assets/logo.svg'

/**
 * Logo est un composant qui affiche le logo de l'application.
 */
const Logo = () => {
  return (
    <div className={styles.logo}>
      <img alt="logo" src={LogoImg} />
    </div>
  )
}

export default Logo
