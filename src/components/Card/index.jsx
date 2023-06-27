import React from 'react'
import caloriesImage from '../../assets/calories-icon.svg'
import proteinsImage from '../../assets/proteines-icon.svg'
import carbohydratesImage from '../../assets/glucides-icon.svg'
import lipidsImage from '../../assets/lipides-icon.svg'
import styles from './Card.module.css'

// Mappage des clés, des unités et des images
const keyMap = {
  calorieCount: { label: 'Calories', unit: 'Kcal', image: caloriesImage },
  proteinCount: { label: 'Protéines', unit: 'g', image: proteinsImage },
  carbohydrateCount: {
    label: 'Glucides',
    unit: 'g',
    image: carbohydratesImage,
  },
  lipidCount: { label: 'Lipides', unit: 'g', image: lipidsImage },
}

const Card = ({ keyData }) => (
  <div>
    {Object.keys(keyData).map((key) => {
      // Vérifie si la clé existe dans keyMap
      if (!keyMap.hasOwnProperty(key)) {
        console.warn(`La clé ${key} n'existe pas dans keyMap.`)
        return null
      }

      // Si la clé est 'calorieCount', convertit le nombre en Kcal et format de milliers
      const value =
        key === 'calorieCount'
          ? (keyData[key] / 1000).toLocaleString('fr-FR', {
              minimumFractionDigits: 3,
              maximumFractionDigits: 3,
            })
          : keyData[key]

      return (
        <div className={styles.card} key={key}>
          <img src={keyMap[key].image} alt={keyMap[key].label} />
          <div>
            <h2>{`${value} ${keyMap[key].unit}`}</h2>
            <p>{keyMap[key].label}</p>
          </div>
        </div>
      )
    })}
  </div>
)

export default Card
