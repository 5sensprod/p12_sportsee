import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import styles from './Score.module.css'

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
            paddingAngle={5}
            dataKey="value"
            startAngle={90}
          >
            <Cell fill="#ff0000" />
            <Cell fill="#FBFBFB" />
          </Pie>
          <Tooltip />
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

export default Score
