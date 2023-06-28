class UserModel {
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
