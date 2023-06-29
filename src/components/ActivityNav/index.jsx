import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './ActivityNav.module.css'
import iconDumbBell from '../../assets/iconDumbBell.svg'
import iconBike from '../../assets/iconBike.svg'
import iconMeditation from '../../assets/iconMeditation.svg'
import iconSwiming from '../../assets/iconSwiming.svg'

const ActivityNav = () => {
  const currentYear = new Date().getFullYear()
  const location = useLocation()

  return (
    <div className={styles.asideNavContainer}>
      <nav>
        <ul className={styles.activitiesList}>
          <li className={styles.activitiesLink}>
            <Link to={location.pathname}>
              <img
                className={styles.activityPicto}
                src={iconMeditation}
                alt="Méditation"
              />
            </Link>
          </li>
          <li>
            <Link to={location.pathname}>
              <img
                className={styles.activityPicto}
                src={iconSwiming}
                alt="Natation"
              />
            </Link>
          </li>
          <li>
            <Link to={location.pathname}>
              <img
                className={styles.activityPicto}
                src={iconBike}
                alt="Cyclisme"
              />
            </Link>
          </li>
          <li>
            <Link to={location.pathname}>
              <img
                className={styles.activityPicto}
                src={iconDumbBell}
                alt="Musculation"
              />
            </Link>
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
