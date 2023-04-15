// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryItem} = props
  const {name, issuesCount, forksCount, avatarUrl, starsCount} = repositoryItem
  return (
    <div className="repoContainer">
      <img src={avatarUrl} alt={name} className="repoImg" />
      <h1 className="repoName">{name}</h1>
      <div className="iconContainer">
        <img
          alt="stars"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="repoIcon"
        />
        <p>{`${starsCount} stars`}</p>
      </div>
      <div className="iconContainer">
        <img
          alt="forks"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="repoIcon"
        />
        <p>{`${forksCount} forks`}</p>
      </div>
      <div className="iconContainer">
        <img
          alt="open issues"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="repoIcon"
        />
        <p>{`${issuesCount} issues`}</p>
      </div>
    </div>
  )
}
export default RepositoryItem
