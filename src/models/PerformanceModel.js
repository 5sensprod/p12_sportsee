/**
 * Modèle de données pour la performance d'un utilisateur.
 */
class PerformanceModel {
  /**
   * Crée une nouvelle instance du modèle Performance.
   *
   * @param {object} data - Les données de performance pour l'utilisateur.
   * @param {number} data.userId - L'ID de l'utilisateur.
   * @param {string} data.kind - Le type de performance.
   * @param {Array} data.data - Les données de performance.
   */
  constructor({ userId, kind, data }) {
    this.userId = userId
    // Cartographie pour la traduction
    const kindMap = {
      cardio: 'Cardio',
      energy: 'Énergie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    }
    this.kind = kind
    this.data = data.map((d) => ({
      ...d,
      kind: kindMap[kind[d.kind]] || kind[d.kind], // Utilise la traduction s'il y en a une, sinon utiliser la valeur originale
    }))
  }
}

export default PerformanceModel
