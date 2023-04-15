import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeLanguage: languageFiltersData[0].id,
    respositoryItemsList: [],
    apiStatus: 'loading',
  }

  componentDidMount() {
    this.getRepositoriesList()
  }

  onChangeActiveLanguage = id => {
    this.setState({activeLanguage: id}, this.getRepositoriesList)
  }

  renderFailed = () => (
    <div className="failed">
      <img
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      />
      <h1>Something Went Wrong</h1>
    </div>
  )

  getRepositoriesList = async () => {
    this.setState({apiStatus: 'Loading'})
    const {activeLanguage} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeLanguage}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const popularRepos = data.popular_repos
    const updatedPopularRepos = popularRepos.map(each => ({
      id: each.id,
      name: each.name,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))
    if (response.ok === true) {
      this.setState({
        respositoryItemsList: updatedPopularRepos,
        apiStatus: 'fetched',
      })
    } else {
      this.setState({
        respositoryItemsList: updatedPopularRepos,
        apiStatus: 'failed',
      })
    }
  }

  renderLoading = () => (
    <div className="reposContainer">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderItems = () => {
    const {respositoryItemsList} = this.state
    // console.log('render Items triggered')

    return (
      <div className="reposContainer">
        {respositoryItemsList.map(each => (
          <RepositoryItem key={each.id} repositoryItem={each} />
        ))}
      </div>
    )
  }

  render() {
    const {activeLanguage, respositoryItemsList, apiStatus} = this.state

    return (
      <div>
        <h1 className="heading">Popular</h1>
        <div className="languageBtnContainer">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              filterItem={each}
              activeLanguage={activeLanguage}
              onChangeActiveLanguage={this.onChangeActiveLanguage}
              key={each.id}
            />
          ))}
        </div>
        {apiStatus === 'Loading' ? this.renderLoading() : this.renderItems()}
      </div>
    )
  }
}

export default GithubPopularRepos
