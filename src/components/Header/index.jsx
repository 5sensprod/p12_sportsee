import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Logo from '../Logo'
import Nav from '../Nav'

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
