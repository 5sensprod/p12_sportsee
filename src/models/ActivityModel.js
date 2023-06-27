class ActivityModel {
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
