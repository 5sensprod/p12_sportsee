import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { fetchUser } from '../../services/serviceApi'

function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const userIds = [12, 18] // les IDs des utilisateurs à afficher

    Promise.all(userIds.map((id) => fetchUser(id)))
      .then(setUsers)
      .catch((error) => {
        console.error('Failed to fetch user data', error)
      })
  }, [])

  return (
    <main>
      <h1 className={styles.title}>Bonjour</h1>
      {users.map((user) => (
        <Link key={user.id} to={`/user/${user.id}`} className={styles.userLink}>
          <span className={styles.userName}>Consulter les données de </span>
          {user.firstName} {user.lastName}
        </Link>
      ))}
    </main>
  )
}

export default Home
