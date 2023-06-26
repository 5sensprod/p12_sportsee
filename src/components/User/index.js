import React, { useEffect, useState } from 'react'
import { fetchUser } from '../../services/serviceApi'
import { useParams, useNavigate } from 'react-router-dom'

const User = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser(id)
      .then((userData) => {
        if (userData) {
          setUser(userData)
        } else {
          setError('Utilisateur introuvable')
          navigate('/404')
        }
      })
      .catch(() => setError('Une erreur est survenue'))
  }, [id, navigate])

  if (error) {
    return <h2>{error}</h2>
  }

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
