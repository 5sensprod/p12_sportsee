/**
 * Modèle de données pour l'activité d'un utilisateur.
 */
class ActivityModel {
  /**
   * Crée une nouvelle instance du modèle Activity.
   *
   * @param {object} data - Les données d'activité pour l'utilisateur.
   * @param {number} data.userId - L'ID de l'utilisateur.
   * @param {Array} data.sessions - Les sessions d'activité pour l'utilisateur.
   */
  constructor({ userId, sessions }) {
    this.userId = userId
    this.sessions = sessions.map((session, index) => ({
      ...session,
      day: index + 1, // Transforme la journée en numéro
      kilogram: session.kilogram, // Ajout du poids en kg
      calories: session.calories, // Ajout des calories
    }))
  }
}

export default ActivityModel
