import React from 'react'
import Header from '../Header'
import ActivityNav from '../ActivityNav'
import styles from './Layout.module.css'

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.layoutContainer}>
        <ActivityNav />
        {children}
      </div>
    </>
  )
}

export default Layout
