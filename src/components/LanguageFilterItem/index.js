// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {filterItem, activeLanguage, onChangeActiveLanguage} = props
  const {id, language} = filterItem
  const activeTabClass = id === activeLanguage ? 'activeTab' : ''
  const activeBtn = id === activeLanguage ? 'activeBtn' : ''
  const changeActiveTab = () => {
    onChangeActiveLanguage(id)
  }
  return (
    <div className={`btnContainer ${activeTabClass}`}>
      <button
        type="button"
        className={`languageBtn ${activeBtn}`}
        onClick={changeActiveTab}
      >
        {language}
      </button>
    </div>
  )
}

export default LanguageFilterItem
