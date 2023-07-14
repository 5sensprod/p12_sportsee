import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  fetchUser,
  fetchPerformance,
  fetchAverageSessions,
  fetchActivity,
} from '../../services/serviceApi'
import CardList from '../../components/Card/CardList'
import Score from '../../components/Score'
import Performance from '../../components/Performance'
import AverageSessions from '../../components/AverageSessions'
import Activity from '../../components/Activity'
import styles from './User.module.css'
import Loader from '../../components/Loader'

/**
 * Ce composant représente une page utilisateur individuelle.
 * Il récupère les informations de l'utilisateur, ses performances,
 * ses sessions moyennes et son activité en utilisant l'API de service,
 * puis les affiche à l'aide de plusieurs sous-composants.
 *
 * @component
 */

const User = () => {
  const [user, setUser] = useState(null)
  const [performance, setPerformance] = useState(null)
  const [averageSessions, setAverageSessions] = useState(null)
  const [activity, setActivity] = useState(null)
  const { id } = useParams()
  console.log(id)
  const navigate = useNavigate()

  useEffect(() => {
    Promise.all([
      fetchUser(id),
      fetchPerformance(id),
      fetchAverageSessions(id),
      fetchActivity(id),
    ])
      .then(
        ([userData, performanceData, averageSessionsData, activityData]) => {
          setUser(userData)
          setPerformance(performanceData)
          setAverageSessions(averageSessionsData)
          setActivity(activityData)
        }
      )
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
                {averageSessions && (
                  <AverageSessions data={averageSessions.sessions} />
                )}
                {performance && <Performance data={performance.data} />}
                <Score score={user.score} />
              </div>
            </div>
            <div className={styles.containerCards}>
              <CardList keyData={user.keyData} />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  )
}

export default User
