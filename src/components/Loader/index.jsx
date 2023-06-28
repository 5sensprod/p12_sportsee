import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.containerLoader}>
      <p className={styles.loadingText}>Chargement en cours</p>
      <div className={styles.spinner}>
        <div className={styles.doubleBounce1}></div>
        <div className={styles.doubleBounce2}></div>
      </div>
    </div>
  )
}

export default Loader
