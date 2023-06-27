import React from 'react'
import styles from './Logo.module.css'
import LogoImg from '../../assets/logo.svg'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img alt="logo" src={LogoImg} />
    </div>
  )
}

export default Logo
