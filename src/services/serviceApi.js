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

export const fetchUser = (id) => {
  const data = userData[id]
  return Promise.resolve(new UserModel(data))
}

export const fetchPerformance = (userId) => {
  const data = performanceData[userId]
  return Promise.resolve(new PerformanceModel(data))
}

export const fetchAverageSessions = (userId) => {
  const data = averageSessionsData[userId]
  return Promise.resolve(new AverageSessionsModel(data))
}

export const fetchActivity = (userId) => {
  const data = activityData[userId]
  return Promise.resolve(new ActivityModel(data))
}
