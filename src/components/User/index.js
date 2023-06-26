import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchUser, fetchPerformance } from '../../services/serviceApi'
import Card from '../Card'
import Score from '../Score'
import Performance from '../Performance'

const User = () => {
  const [user, setUser] = useState(null)
  const [performance, setPerformance] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser(id)
      .then((userData) => setUser(userData))
      .catch(() => navigate('/not-found'))

    fetchPerformance(id)
      .then((performanceData) => setPerformance(performanceData))
      .catch(() => navigate('/not-found'))
  }, [id, navigate])

  return (
    <div>
      {user ? (
        <div>
          <h1>Bonjour, {user.firstName}!</h1>
          <Card keyData={user.keyData} />
          <Score score={user.score} />
          {performance && <Performance data={performance.data} />}
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  )
}

export default User
