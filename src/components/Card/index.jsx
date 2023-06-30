import React from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './Card.module.css'

const AnimatedNumber = ({ value, unit }) => {
  const springProps = useSpring({
    number: value,
    from: { number: 0 },
    config: { tension: 80, friction: 20 },
  })

  return (
    <animated.h2>
      {springProps.number.to((val) =>
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

const Card = ({ image, label, value, unit }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={label} />
      <div>
        <AnimatedNumber value={value} unit={unit} />
        <p>{label}</p>
      </div>
    </div>
  )
}

export default Card
