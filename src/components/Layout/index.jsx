import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import ActivityNav from '../ActivityNav'
import styles from './Layout.module.css'

/**
 * Layout est un composant qui englobe d'autres composants
 * et assure une disposition cohérente sur toutes les pages.
 * Il inclut le Header, l'ActivityNav, et les enfants qui sont passés en tant que props.
 *
 * @param {object} props Les props passées au composant Layout.
 * @param {ReactNode} props.children Les composants enfants à rendre à l'intérieur du Layout.
 */
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
