export default class UserInfo {
  constructor({ dataName, dataJob }) {
    this._nameElement = dataName;
    this._jobElement = dataJob;
  }

  getUserInfo() {

    return {
      dataName: this._nameElement.textContent,
      dataJob: this._jobElement.textContent
    };
  }

  setUserInfo({dataName, dataJob}) {
    console.log(this._nameElement)
    console.log(this.dataName)
    this._nameElement.textContent = dataName;
    this._jobElement.textContent = dataJob;
  };
}
