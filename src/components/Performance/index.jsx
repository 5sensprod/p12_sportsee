import React from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'

const Performance = ({ data }) => (
  <div>
    <RadarChart outerRadius={90} width={730} height={250} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <Radar
        name="Performances"
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  </div>
)

export default Performance
