import React from 'react'
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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <p className={styles.tooltipContainer}>{`${payload[0].value} min`}</p>
    )
  }
  return null
}

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

export default AverageSessions
