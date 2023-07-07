import React from 'react'
import PropTypes from 'prop-types'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import styles from './Score.module.css'

/**
 * Composant pour afficher le score d'un utilisateur dans un PieChart.
 *
 * @component
 * @param {object} props - Les props du composant.
 * @param {number} props.score - Le score de l'utilisateur.
 */

const Score = ({ score }) => {
  const data = [
    { name: 'Score', value: score * 100 },
    { name: 'Rest', value: (1 - score) * 100 },
  ]

  return (
    <div className={styles.scoreContainer}>
      <h2 className={styles.scoreTitle}>Score</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={85}
            endAngle={450}
            dataKey="value"
            startAngle={90}
          >
            <Cell fill="#ff0000" cornerRadius={10} />
            <Cell fill="#FBFBFB" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className={styles.scoreText}>
        <span className={styles.scoreNumber}>{`${score * 100}%`}</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
}

export default Score
