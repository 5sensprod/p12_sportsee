import React from 'react'
import styles from './Header.module.css'
import Logo from '../Logo'
import Nav from '../Nav'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  )
}

export default Header
