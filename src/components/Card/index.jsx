import React from 'react'

const Card = ({ keyData }) => (
  <div>
    {Object.keys(keyData).map((key) => (
      <div className="card" key={key}>
        <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
        <p>{keyData[key]}</p>
      </div>
    ))}
  </div>
)

export default Card
