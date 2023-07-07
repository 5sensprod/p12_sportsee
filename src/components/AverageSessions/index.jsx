import React from 'react'
import PropTypes from 'prop-types'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import styles from './AverageSessions.module.css'

const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

/**
 * CustomTooltip est un composant qui affiche une infobulle personnalisée avec la durée de la session.
 *
 * @param {Object} props - Props du composant CustomTooltip.
 * @param {boolean} props.active - Indique si l'infobulle est active.
 * @param {Object[]} props.payload - Contient les informations à afficher dans l'infobulle.
 * @returns {JSX.Element} Le JSX du composant CustomTooltip.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <p className={styles.tooltipContainer}>{`${payload[0].value} min`}</p>
    )
  }
  return null
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}

/**
 * AverageSessions est un composant qui affiche un graphique de ligne représentant la durée moyenne des sessions.
 *
 * @param {Object} props - Props du composant AverageSessions.
 * @param {Object[]} props.data - Contient les informations à afficher dans le graphique.
 * @returns {JSX.Element} Le JSX du composant AverageSessions.
 */
const AverageSessions = ({ data }) => (
  <div className={styles.averageSessionsContainer}>
    <h2 className={styles.averageSessionsTitle}>Durée moyenne des sessions</h2>
    <ResponsiveContainer>
      <LineChart data={data}>
        <XAxis
          dataKey="day"
          tickFormatter={(tickItem) =>
            days[parseInt(tickItem.split(' ')[1]) - 1]
          }
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'white' }}
        />
        <YAxis
          dataKey="sessionLength"
          domain={[40, 'dataMax + 20']}
          hide={true}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

// Spécifie les types des props pour le composant AverageSessions.
AverageSessions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number,
    })
  ).isRequired,
}

export default AverageSessions
