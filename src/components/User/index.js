import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchUser, fetchPerformance } from '../../services/serviceApi'
import Card from '../Card'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'

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
          <Card title="Calories" value={user.keyData.calorieCount} />
          <Card title="Protéines" value={user.keyData.proteinCount} />
          <Card title="Glucides" value={user.keyData.carbohydrateCount} />
          <Card title="Lipides" value={user.keyData.lipidCount} />
          <Card title="Score" value={`${user.score * 100}%`} />

          {performance && (
            <RadarChart
              outerRadius={90}
              width={730}
              height={250}
              data={performance.data}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="kind" />
              <Radar
                name="Mike"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          )}
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  )
}

export default User
