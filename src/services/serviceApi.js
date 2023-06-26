import { userData, performanceData } from '../api/mockData'
import UserModel from '../models/UserModel'
import PerformanceModel from '../models/PerformanceModel'

export const fetchUser = (id) => {
  // utilise l'ID pour récupérer les bonnes données
  const data = userData[id]
  return Promise.resolve(new UserModel(data))
}

export const fetchPerformance = (userId) => {
  const data = performanceData[userId]
  return Promise.resolve(new PerformanceModel(data))
}
