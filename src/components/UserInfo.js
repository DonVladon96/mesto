
export default class UserInfo {
  constructor({ dataName, dataJob, avatar }) {
    this._nameElement = dataName;
    this._jobElement = dataJob;
    this._avatarElement = avatar;
  }

  getUserInfo() {
    return {
      dataName: this._nameElement.textContent,
      dataJob: this._jobElement.textContent,
      avatar: this._avatarElement.src
    };
  }

  setUserInfo({dataName, dataJob}) {
    this._nameElement.textContent = dataName;
    this._jobElement.textContent = dataJob;

  };

  setProfileAvatar({avatar}){
    this._avatarElement.src = avatar;
  }
}
