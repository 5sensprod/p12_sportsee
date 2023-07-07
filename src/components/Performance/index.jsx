import React from 'react'
import PropTypes from 'prop-types'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'
import styles from './Performance.module.css'

/**
 * Composant pour afficher les données de performance de l'utilisateur dans un RadarChart.
 *
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {object} props.data - Les données de performance.
 * @param {number} props.data.userId - L'identifiant de l'utilisateur.
 * @param {object} props.data.kind - Un objet mappant les identifiants aux types de performances.
 * @param {Array} props.data.data - Les données réelles à afficher dans le RadarChart. Chaque élément est un objet contenant une propriété 'value' et 'kind'.
 */

const Performance = ({ data }) => (
  <div className={styles.performanceContainer}>
    <ResponsiveContainer>
      <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
        <PolarGrid gridType="polygon" />
        <PolarAngleAxis
          dataKey="kind"
          stroke="white"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 10 }}
        />
        <Radar
          name="Performances"
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  </div>
)

Performance.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Performance
