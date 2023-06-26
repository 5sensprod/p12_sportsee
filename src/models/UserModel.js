class UserModel {
  constructor({ id, userInfos, keyData }) {
    this.id = id
    this.firstName = userInfos.firstName
    this.lastName = userInfos.lastName
    this.age = userInfos.age
    this.score = userInfos.todayScore ? userInfos.todayScore : userInfos.score
    this.keyData = keyData
  }
}

export default UserModel
