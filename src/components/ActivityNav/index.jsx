import React from 'react'
import styles from './ActivityNav.module.css'
import iconDumbBell from '../../assets/iconDumbBell.svg'
import iconBike from '../../assets/iconBike.svg'
import iconMeditation from '../../assets/iconMeditation.svg'
import iconSwiming from '../../assets/iconSwiming.svg'

const ActivityNav = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className={styles.asideNavContainer}>
      <nav>
        <ul className={styles.activitiesList}>
          <li>
            <a href="/">
              <img
                className={styles.activityPicto}
                src={iconMeditation}
                alt="Méditation"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className={styles.activityPicto}
                src={iconSwiming}
                alt="Natation"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className={styles.activityPicto}
                src={iconBike}
                alt="Cyclisme"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className={styles.activityPicto}
                src={iconDumbBell}
                alt="Musculation"
              />
            </a>
          </li>
        </ul>
      </nav>

      <p className={styles.footer}>
        Copyright, SportSee 2020 - {currentYear} ©
      </p>
    </div>
  )
}

export default ActivityNav
