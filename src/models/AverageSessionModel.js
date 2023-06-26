class AverageSessionsModel {
  constructor({ userId, sessions }) {
    this.userId = userId
    this.sessions = sessions.map((session) => ({
      ...session,
      day: `Jour ${session.day}`,
    }))
  }
}

export default AverageSessionsModel
