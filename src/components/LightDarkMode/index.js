// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isCardChange: true}

  onChangeCard = () => {
    this.setState(prevState => ({isCardChange: !prevState.isCardChange}))
  }

  toChangeText = () => {
    const {isCardChange} = this.state
    return isCardChange ? 'Light Mode' : 'Dark Mode'
  }

  toChangeCard = () => {
    const {isCardChange} = this.state
    return isCardChange ? 'content-container-dark' : 'content-container-white'
  }

  toChangeHeading = () => {
    const {isCardChange} = this.state
    return isCardChange ? 'white-heading' : 'dark-heading'
  }

  toChangeButton = () => {
    const {isCardChange} = this.state
    return isCardChange ? 'light-btn' : 'dark-btn'
  }

  render() {
    const text = this.toChangeText()
    const cardClass = this.toChangeCard()
    const headingClass = this.toChangeHeading()
    const btnClass = this.toChangeButton()
    return (
      <div className="bg-container">
        <div className={cardClass}>
          <h1 className={headingClass}>Click To Change Mode</h1>
          <button
            className={btnClass}
            type="button"
            onClick={this.onChangeCard}
          >
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
