import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchUser } from '../../services/serviceApi'

const User = () => {
  const [user, setUser] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser(id)
      .then((userData) => setUser(userData))
      .catch(() => navigate('/not-found'))
  }, [id, navigate])

  return (
    <div>
      {user ? <h1>Bonjour, {user.firstName}!</h1> : <p>Chargement...</p>}
    </div>
  )
}

export default User
