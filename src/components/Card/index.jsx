import React from 'react'

// Mappage des clés et des unités
const keyMap = {
  calorieCount: { label: 'Calories', unit: 'Kcal' },
  proteinCount: { label: 'Protéines', unit: 'g' },
  carbohydrateCount: { label: 'Glucides', unit: 'g' },
  lipidCount: { label: 'Lipides', unit: 'g' },
}

const Card = ({ keyData }) => (
  <div>
    {Object.keys(keyData).map((key) => {
      // Vérifie si la clé existe dans keyMap
      if (!keyMap.hasOwnProperty(key)) {
        console.warn(`La clé ${key} n'existe pas dans keyMap.`)
        return null
      }

      return (
        <div className="card" key={key}>
          <h2>{keyMap[key].label}</h2>
          <p>{`${keyData[key]} ${keyMap[key].unit}`}</p>
        </div>
      )
    })}
  </div>
)

export default Card
