import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchUser } from '../../services/serviceApi'
import Card from '../Card'

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
      {user ? (
        <div>
          <h1>Bonjour, {user.firstName}!</h1>
          <Card title="Calories" value={user.keyData.calorieCount} />
          <Card title="Protéines" value={user.keyData.proteinCount} />
          <Card title="Glucides" value={user.keyData.carbohydrateCount} />
          <Card title="Lipides" value={user.keyData.lipidCount} />
          <Card title="Score" value={`${user.score * 100}%`} />
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  )
}

export default User
