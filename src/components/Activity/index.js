import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import styles from './Activity.module.css'

// Création d'un Tooltip personnalisé pour afficher les unités
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltipContainer}>
        <p
          className={styles.tooltipLine}
          style={{ background: '#ff0101' }}
        >{`Poids: ${payload[0].value}kg`}</p>
        <p
          className={styles.tooltipLine}
          style={{ background: '#ff0101' }}
        >{`Calories: ${payload[1].value}kcal`}</p>
      </div>
    )
  }

  return null
}

const Activity = ({ data }) => {
  if (!data) return null

  // Ajoute une nouvelle propriété pour le numéro du jour
  const dataWithDayNumber = data.map((item, index) => ({
    ...item,
    dayNumber: index + 1,
  }))

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2 className={styles.chartTitle}>Activité quotidienne</h2>

        <div className={styles.chartLegend}>
          <p className={styles.legendDetail}>
            <span
              className={styles.icon}
              style={{ background: '#282D30' }}
            ></span>
            <span className={styles.text}>Poids (kg)</span>
          </p>
          <p className={styles.legendDetail}>
            <span
              className={styles.icon}
              style={{ background: '#E60000' }}
            ></span>
            <span className={styles.text}>Calories brûlées (kCal)</span>
          </p>
        </div>
      </div>

      <BarChart
        width={850}
        height={300}
        data={dataWithDayNumber}
        margin={{
          top: 80,
          right: 48,
          left: 48,
          bottom: 32,
        }}
        barGap={8}
        barCategoryGap="35%"
      >
        <CartesianGrid
          strokeDasharray="2 2"
          vertical={false}
          stroke="#ced4da"
        />
        <XAxis
          dataKey="day"
          dy={16}
          padding={{ left: -20, right: -20 }}
          stroke="#6c757d"
          tickLine={false}
          tick={{ fontSize: 14, fontWeight: 500 }}
        />
        <YAxis
          yAxisId="kg"
          dataKey="kilogram"
          domain={['dataMin - 1', 'dataMax + 2']}
          allowDecimals={false}
          dx={48}
          orientation="right"
          stroke="#6c757d"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          yAxisId="cal"
          dataKey="calories"
          domain={[0, 'dataMax + 50']}
          hide={true}
        />
        <Bar
          yAxisId="kg"
          dataKey="kilogram"
          maxBarSize={8}
          fill="#343a40"
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="cal"
          dataKey="calories"
          maxBarSize={8}
          fill="#ff0101"
          radius={[50, 50, 0, 0]}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
        />
      </BarChart>
    </div>
  )
}

export default Activity
