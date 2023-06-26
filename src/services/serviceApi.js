import { userData } from '../api/mockData'

export const fetchUser = (id) => {
  // utilise l'ID pour récupérer les bonnes données
  return Promise.resolve(userData[id])
}
