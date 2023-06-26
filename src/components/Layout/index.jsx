import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './Layout.module.css'

function Layout({ children }) {
  return (
    <>
      <div className={styles.layoutContainer}>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
