import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

const AverageSessions = ({ data }) => (
  <div>
    <h2>Sessions moyennes</h2>
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
    </LineChart>
  </div>
)

export default AverageSessions
