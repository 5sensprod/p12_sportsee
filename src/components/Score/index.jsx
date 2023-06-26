import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

const Score = ({ score }) => {
  const data = [
    { name: 'Score', value: score * 100 },
    { name: 'Rest', value: (1 - score) * 100 }, // Ajout d'une portion pour représenter le reste du cercle
  ]

  return (
    <div>
      <h2>Score</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          <Cell fill="#8884d8" />{' '}
          {/* Couleur de la portion représentant le score */}
          <Cell fill="#ccc" />{' '}
          {/* Couleur de la portion représentant le reste */}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  )
}

export default Score
