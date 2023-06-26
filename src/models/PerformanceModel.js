class PerformanceModel {
  constructor({ userId, kind, data }) {
    this.userId = userId
    this.kind = kind
    this.data = data.map((d) => ({ ...d, kind: kind[d.kind] }))
  }
}

export default PerformanceModel
