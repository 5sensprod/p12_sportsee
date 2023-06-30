import React, { useMemo } from 'react'
import caloriesImage from '../../assets/calories-icon.svg'
import proteinsImage from '../../assets/proteines-icon.svg'
import carbohydratesImage from '../../assets/glucides-icon.svg'
import lipidsImage from '../../assets/lipides-icon.svg'
import Card from './index.jsx'

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

const CardList = ({ keyData }) => {
  const keys = useMemo(() => Object.keys(keyData), [keyData])

  return (
    <>
      {keys.map((key) => {
        if (!keyMap.hasOwnProperty(key)) {
          console.warn(`La clé ${key} n'existe pas dans keyMap.`)
          return null
        }
        const value = keyData[key]
        return (
          <Card
            key={key}
            image={keyMap[key].image}
            label={keyMap[key].label}
            value={value}
            unit={keyMap[key].unit}
          />
        )
      })}
    </>
  )
}

export default CardList
