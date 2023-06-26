import React from 'react'

const Card = ({ title, value, icon }) => (
  <div className="card">
    <img src={icon} alt={title} />
    <h2>{title}</h2>
    <p>{value}</p>
  </div>
)

export default Card
