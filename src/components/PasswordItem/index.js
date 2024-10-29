import './index.css'

const PasswordItem = props => {
  const profileColors = [
    '',
    '#7683cb',
    '#f59e0b',
    '#10b981',
    '#f97316',
    '#14b8a6',
    '#b91c1c',
    '#0ea5e9',
  ]
  const profilePicColor = profileColors[Math.ceil(Math.random() * 7)]
  const {record, showPassword, deletePasswordRecord} = props
  const {id, inputUrl, inputName, inputPassword} = record

  const passwordPattern = showPassword ? (
    <p className="website-text">{inputPassword}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-icon"
    />
  )

  const onDeleteRecord = () => {
    deletePasswordRecord(id)
  }

  return (
    <li className="password-item">
      <div className="circle" style={{backgroundColor: `${profilePicColor}`}}>
        {inputName.charAt(0)}
      </div>
      <div className="details-container">
        <p className="website-text">{inputUrl}</p>
        <p className="website-text">{inputName}</p>
        {passwordPattern}
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={onDeleteRecord}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default PasswordItem
