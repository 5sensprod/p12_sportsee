/**
 * Modèle de données pour un utilisateur.
 */
class UserModel {
  /**
   * Crée une nouvelle instance du modèle User.
   *
   * @param {object} data - Les données de l'utilisateur.
   * @param {number} data.id - L'ID de l'utilisateur.
   * @param {object} data.userInfos - Les informations de l'utilisateur.
   * @param {number} data.score - Le score de l'utilisateur.
   * @param {number} data.todayScore - Le score du jour de l'utilisateur.
   * @param {object} data.keyData - Les données clés de l'utilisateur.
   */
  constructor({ id, userInfos, score, todayScore, keyData }) {
    this.id = id
    this.firstName = userInfos.firstName
    this.lastName = userInfos.lastName
    this.age = userInfos.age
    this.score = score || todayScore // accept both 'score' and 'todayScore'
    this.keyData = keyData
  }
}

export default UserModel
