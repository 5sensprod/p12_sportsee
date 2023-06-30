import { fetchData } from '../api/apiHelper'
import {
  performanceData,
  averageSessionsData,
  activityData,
} from '../api/mockData'
import UserModel from '../models/UserModel'
import PerformanceModel from '../models/PerformanceModel'
import AverageSessionsModel from '../models/AverageSessionsModel'
import ActivityModel from '../models/ActivityModel'

const API_BASE_URL = 'http://localhost:3000/user/'
const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA === 'true'

export const fetchUser = async (id) => {
  if (USE_MOCK_DATA) {
    try {
      const dataModule = await import(`../api/user${id}.json`) // dynamic import
      const data = dataModule[id]
      if (!data) {
        throw new Error(`No user with id ${id}`)
      }
      return new UserModel(data.data)
    } catch (error) {
      console.error('Failed to fetch user data', error)
      throw error
    }
  } else {
    try {
      const response = await fetch(`${API_BASE_URL}${id}`)
      const data = await response.json()
      return new UserModel(data.data)
    } catch (error) {
      console.error('Failed to fetch user data', error)
      throw error
    }
  }
}

export const fetchPerformance = async (userId) => {
  return fetchData(
    userId,
    'performance',
    PerformanceModel,
    performanceData,
    API_BASE_URL,
    USE_MOCK_DATA
  )
}

export const fetchAverageSessions = async (userId) => {
  return fetchData(
    userId,
    'average-sessions',
    AverageSessionsModel,
    averageSessionsData,
    API_BASE_URL,
    USE_MOCK_DATA
  )
}

export const fetchActivity = async (userId) => {
  return fetchData(
    userId,
    'activity',
    ActivityModel,
    activityData,
    API_BASE_URL,
    USE_MOCK_DATA
  )
}
