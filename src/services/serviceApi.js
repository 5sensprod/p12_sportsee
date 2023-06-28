import {
  userData,
  performanceData,
  averageSessionsData,
  activityData,
} from '../api/mockData'
import UserModel from '../models/UserModel'
import PerformanceModel from '../models/PerformanceModel'
import AverageSessionsModel from '../models/AverageSessionsModel'
import ActivityModel from '../models/ActivityModel'

export const fetchUser = async (id) => {
  if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    const data = userData[id]
    if (!data) {
      throw new Error(`No user with id ${id}`)
    }
    return new UserModel(data)
  } else {
    try {
      const response = await fetch(`http://localhost:5000/user/${id}`)
      const data = await response.json()
      // console.log('fetchUser data:', data)
      return new UserModel(data.data)
    } catch (error) {
      console.error('Failed to fetch user data', error)
      throw error
    }
  }
}

export const fetchPerformance = async (userId) => {
  if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    const data = performanceData[userId]
    if (!data) {
      throw new Error(`No performance data for user ${userId}`)
    }
    return new PerformanceModel(data)
  } else {
    try {
      const response = await fetch(
        `http://localhost:5000/user/${userId}/performance`
      )
      const data = await response.json()
      return new PerformanceModel(data.data)
    } catch (error) {
      console.error('Failed to fetch performance data', error)
      throw error
    }
  }
}

export const fetchAverageSessions = async (userId) => {
  if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    const data = averageSessionsData[userId]
    if (!data) {
      throw new Error(`No average session data for user ${userId}`)
    }
    return new AverageSessionsModel(data)
  } else {
    try {
      const response = await fetch(
        `http://localhost:5000/user/${userId}/average-sessions`
      )
      const data = await response.json()
      return new AverageSessionsModel(data.data)
    } catch (error) {
      console.error('Failed to fetch average sessions data', error)
      throw error
    }
  }
}

export const fetchActivity = async (userId) => {
  if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    const data = activityData[userId]
    if (!data) {
      throw new Error(`No activity data for user ${userId}`)
    }
    return new ActivityModel(data)
  } else {
    try {
      const response = await fetch(
        `http://localhost:5000/user/${userId}/activity`
      )
      const data = await response.json()
      return new ActivityModel(data.data)
    } catch (error) {
      console.error('Failed to fetch activity data', error)
      throw error
    }
  }
}
