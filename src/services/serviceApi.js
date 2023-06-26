import { userData } from '../api/mockData'
import UserModel from '../models/UserModel'

export const fetchUser = (id) => {
  const userDatum = userData[id]
  if (userDatum) {
    return Promise.resolve(new UserModel(userDatum))
  } else {
    return Promise.reject(new Error('User not found'))
  }
}
