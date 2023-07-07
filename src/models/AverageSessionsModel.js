/**
 * Modèle de données pour les sessions moyennes d'un utilisateur.
 */
class AverageSessionsModel {
  /**
   * Crée une nouvelle instance du modèle AverageSessions.
   *
   * @param {object} data - Les données de sessions moyennes pour l'utilisateur.
   * @param {number} data.userId - L'ID de l'utilisateur.
   * @param {Array} data.sessions - Les sessions moyennes pour l'utilisateur.
   */
  constructor({ userId, sessions }) {
    this.userId = userId
    this.sessions = sessions.map((session) => ({
      ...session,
      day: `Jour ${session.day}`,
    }))
  }
}

export default AverageSessionsModel
