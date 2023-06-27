import React from 'react'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'
import styles from './Performance.module.css'

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

export default Performance
