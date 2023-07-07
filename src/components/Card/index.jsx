import React from 'react'
import { useSpring, animated } from 'react-spring'
import PropTypes from 'prop-types'
import styles from './Card.module.css'

/**
 * AnimatedNumber est un composant qui anime une transition numérique de 0 à la valeur spécifiée.
 *
 * @param {Object} props - Props du composant AnimatedNumber.
 * @param {number} props.value - La valeur finale de l'animation.
 * @param {string} props.unit - L'unité de la valeur (par exemple, 'Kcal', 'g').
 */

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

AnimatedNumber.propTypes = {
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
}

/**
 * Card est un composant qui affiche une carte avec une image, une valeur animée et une étiquette.
 *
 * @param {Object} props - Props du composant Card.
 * @param {string} props.image - L'URL de l'image à afficher.
 * @param {string} props.label - L'étiquette à afficher.
 * @param {number} props.value - La valeur à animer.
 * @param {string} props.unit - L'unité de la valeur (par exemple, 'Kcal', 'g').
 */

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

Card.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
}

export default Card
