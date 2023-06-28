import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
    <main>
      <h1 className={styles.title}>Bonjour</h1>
      <Link to="/user/12">Voir l'utilisateur 12</Link>
      <br />
      <Link to="/user/18">Voir l'utilisateur 18</Link>
    </main>
  )
}

export default Home
