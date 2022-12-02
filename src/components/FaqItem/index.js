// Write your code here.
import './index.css'

import {Component} from 'react'

class FaqItem extends Component {
  state = {isActive: false}

  onClickShowAnswer = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const {eachFaq} = this.props
    const {questionText, id, answerText} = eachFaq
    const altText = isActive ? 'minus' : 'plus'

    const imageUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    return (
      <li className="container">
        <div className="faq-item-container">
          <div className="faq">
            <h1 className="faq-question">{questionText}</h1>
            <button
              type="button"
              className="btn"
              onClick={this.onClickShowAnswer}
            >
              <img src={imageUrl} alt={altText} className="faqs-icon" />
            </button>
          </div>
          {isActive && <p className="faq-answer">{answerText}</p>}
        </div>
      </li>
    )
  }
}

export default FaqItem
