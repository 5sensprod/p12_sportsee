import React from 'react'
import styles from './Footer.module.css'

// Footer est un composant qui représente le pied de page du site.

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footerContainer}>
      <span className={styles.footerText}>
        Copyright, SportSee 2020 - {currentYear} ©
      </span>
    </footer>
  )
}

export default Footer
