import React from 'react'
import styles from './Header.module.css'
import Logo from '../Logo'
// import { Link } from 'react-router-dom'
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
