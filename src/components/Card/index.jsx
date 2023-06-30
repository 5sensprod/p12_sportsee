import React from 'react'
import { useSpring, animated } from 'react-spring'
import caloriesImage from '../../assets/calories-icon.svg'
import proteinsImage from '../../assets/proteines-icon.svg'
import carbohydratesImage from '../../assets/glucides-icon.svg'
import lipidsImage from '../../assets/lipides-icon.svg'
import styles from './Card.module.css'

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

const Card = ({ keyData }) => {
  const AnimatedNumber = ({ value, unit }) => {
    const springProps = useSpring({
      number: value,
      from: { number: 0 },
      config: { tension: 80, friction: 20 },
    })

    return (
      <animated.h2>
        {springProps.number.interpolate((val) =>
          unit === 'Kcal'
            ? `${(val / 1000).toLocaleString('fr-FR', {
                minimumFractionDigits: 3,
                maximumFractionDigits: 3,
              })} ${unit}`
            : `${Math.round(val)} ${unit}`
        )}
      </animated.h2>
    )
  }

  return (
    <>
      {Object.keys(keyData).map((key) => {
        if (!keyMap.hasOwnProperty(key)) {
          console.warn(`La clé ${key} n'existe pas dans keyMap.`)
          return null
        }
        const value = keyData[key]
        return (
          <div className={styles.card} key={key}>
            <img src={keyMap[key].image} alt={keyMap[key].label} />
            <div>
              <AnimatedNumber value={value} unit={keyMap[key].unit} />
              <p>{keyMap[key].label}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Card
