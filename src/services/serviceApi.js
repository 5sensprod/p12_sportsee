import { userData, performanceData, averageSessionsData } from '../api/mockData'
import UserModel from '../models/UserModel'
import PerformanceModel from '../models/PerformanceModel'
import AverageSessionsModel from '../models/AverageSessionModel'

export const fetchUser = (id) => {
  // utilise l'ID pour récupérer les bonnes données
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
