class PerformanceModel {
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
