import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    passwordsRecord: [],
    inputUrl: '',
    inputName: '',
    inputPassword: '',
    searchInput: '',
    showPassword: false,
  }

  onChangeInputUrl = event => {
    this.setState({inputUrl: event.target.value})
  }

  onChangeUserNameInput = event => {
    this.setState({inputName: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({inputPassword: event.target.value})
  }

  addPasswordsRecord = event => {
    event.preventDefault()
    const {inputPassword, inputName, inputUrl} = this.state
    const newPasswordRecord = {
      id: uuidv4(),
      inputUrl,
      inputName,
      inputPassword,
    }
    this.setState(prevState => ({
      passwordsRecord: [...prevState.passwordsRecord, newPasswordRecord],
      inputName: '',
      inputPassword: '',
      inputUrl: '',
    }))
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  deletePasswordRecord = id => {
    const {passwordsRecord} = this.state
    const filteredPasswordRecords = passwordsRecord.filter(
      eachRec => eachRec.id !== id,
    )
    this.setState({passwordsRecord: filteredPasswordRecords})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchRecords = () => {
    const {passwordsRecord, searchInput} = this.state
    return passwordsRecord.filter(eachRec =>
      eachRec.inputUrl.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  render() {
    const {passwordsRecord, showPassword, inputUrl, inputName, inputPassword} =
      this.state
    const searchRecordsList = this.getSearchRecords()
    return (
      <div className="password-manage-app">
        <div className="responsive-container">
          <header className="password-manage-app-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
          </header>
          <div className="card-container password-inputs-card">
            <img
              src=" https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="manager-image"
            />
            <div className="card form-container">
              <form
                className="card-responsive"
                onSubmit={this.addPasswordsRecord}
              >
                <h1 className="form-heading">Add New Password</h1>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      className="input-icon"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                    />
                  </div>

                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Website"
                    onChange={this.onChangeInputUrl}
                    value={inputUrl}
                  />
                </div>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      className="input-icon"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                    />
                  </div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Username"
                    onChange={this.onChangeUserNameInput}
                    value={inputName}
                  />
                </div>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      className="input-icon"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                    />
                  </div>
                  <input
                    className="input"
                    type="password"
                    placeholder="Enter Password"
                    onChange={this.onChangePasswordInput}
                    value={inputPassword}
                  />
                </div>
                <div className="btn-container">
                  <button className="add-btn" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="card-container">
            <div className="card-responsive no-password-container">
              <div className="passwords-header">
                <div className="total-passwords-container">
                  <h1 className="passwords-header-title">Your Passwords</h1>
                  <p className="results-count">{passwordsRecord.length}</p>
                </div>
                <div className="search-container">
                  <div className="search-icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                      alt="search"
                      className="search-icon"
                    />
                  </div>
                  <input
                    className="search-input"
                    type="search"
                    placeholder="Search"
                    onChange={this.onChangeSearchInput}
                  />
                </div>
              </div>
              <hr className="hr-line" />
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  id="checkbox"
                  onChange={this.onToggleShowPassword}
                />
                <label htmlFor="checkbox" className="checkbox-label">
                  Show Passwords
                </label>
              </div>
              <ul className="passwords-list-container">
                {searchRecordsList.map(eachRecord => (
                  <PasswordItem
                    key={eachRecord.id}
                    record={eachRecord}
                    showPassword={showPassword}
                    deletePasswordRecord={this.deletePasswordRecord}
                  />
                ))}
              </ul>
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-image"
                />
                <p className="no-passwords-title">No Passwords</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
