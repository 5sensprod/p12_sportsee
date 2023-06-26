class UserModel {
  constructor({ id, userInfos, keyData }) {
    this.id = id
    this.firstName = userInfos.firstName
    this.lastName = userInfos.lastName
    this.age = userInfos.age
    this.todayScore = userInfos.todayScore
    this.keyData = keyData
  }
}

export default UserModel
