class UserModel {
  constructor({ id, userInfos, todayScore, score, keyData }) {
    this.id = id
    this.firstName = userInfos.firstName
    this.lastName = userInfos.lastName
    this.age = userInfos.age
    this.score = userInfos.todayScore || userInfos.score || todayScore || score
    this.keyData = keyData
  }
}

export default UserModel
