import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  fetchUser,
  fetchPerformance,
  fetchAverageSessions,
  fetchActivity,
} from '../../services/serviceApi'
import Card from '../Card'
import Score from '../Score'
import Performance from '../Performance'
import AverageSessions from '../AverageSessions'
import Activity from '../Activity'
import styles from './User.module.css'

const User = () => {
  const [user, setUser] = useState(null)
  const [performance, setPerformance] = useState(null)
  const [averageSessions, setAverageSessions] = useState(null)
  const [activity, setActivity] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser(id)
      .then((userData) => setUser(userData))
      .catch(() => navigate('/not-found'))

    fetchPerformance(id)
      .then((performanceData) => setPerformance(performanceData))
      .catch(() => navigate('/not-found'))

    fetchAverageSessions(id)
      .then((averageSessionsData) => setAverageSessions(averageSessionsData))
      .catch(() => navigate('/not-found'))

    fetchActivity(id)
      .then((activityData) => setActivity(activityData))
      .catch(() => navigate('/not-found'))
  }, [id, navigate])

  return (
    <section>
      {user ? (
        <div>
          <h1 className={styles.title}>
            Bonjour <span className={styles.userName}>{user.firstName}</span>
          </h1>
          <span className={styles.subline}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </span>
          <div className={styles.container}>
            <div className={styles.containerChart}>
              {activity && <Activity data={activity.sessions} />}
              <div className={styles.squareChart}>
                <Score score={user.score} />
                {performance && <Performance data={performance.data} />}
                {averageSessions && (
                  <AverageSessions data={averageSessions.sessions} />
                )}
              </div>
            </div>
            <div className={styles.containerCards}>
              <Card keyData={user.keyData} />
            </div>
          </div>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </section>
  )
}

export default User
