import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUser } from '../../services/serviceApi.js'

const User = () => {
  const [user, setUser] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchUser(id).then((userData) => setUser(userData))
  }, [id])

  return (
    <div>
      {user ? (
        <h1>Bonjour, {user.userInfos.firstName}!</h1>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  )
}

export default User
