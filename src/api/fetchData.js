/**
 * Récupère les données d'une ressource pour un utilisateur spécifique.
 *
 * @async
 * @function
 * @param {number} userId - L'ID de l'utilisateur.
 * @param {string} resource - La ressource à récupérer.
 * @param {object} Model - Le modèle à utiliser pour créer une nouvelle instance.
 * @param {object} mockData - Les données simulées à utiliser.
 * @param {string} baseUrl - L'URL de base pour la récupération des données.
 * @param {boolean} useMock - Si vrai, utilise les données simulées à la place des vraies données.
 * @returns {Promise<object>} Les données récupérées.
 * @throws {Error} Si aucune donnée n'est trouvée pour l'utilisateur et la ressource spécifiés.
 */

export const fetchData = async (
  userId,
  resource,
  Model,
  mockData,
  baseUrl,
  useMock
) => {
  if (useMock) {
    const data = mockData[userId]
    if (!data) {
      throw new Error(`No ${resource} data for user ${userId}`)
    }
    return new Model(data)
  } else {
    try {
      const response = await fetch(`${baseUrl}${userId}/${resource}`)
      const data = await response.json()
      return new Model(data.data)
    } catch (error) {
      console.error(`Failed to fetch ${resource} data`, error)
      throw error
    }
  }
}
