// Write your code here.

import './index.css'

import {Component} from 'react'

import FaqItem from '../FaqItem/index'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqsList: props.faqsList,
      ActiveFaqId: -1,
      isAnswerShowed: false,
    }
  }

  showAnswer = id => {
    this.setState(prevState => ({
      isAnswerShowed: !prevState.isAnswerShowed,
      ActiveFaqId: id,
    }))
  }

  render() {
    const {faqsList, ActiveFaqId, isAnswerShowed} = this.state

    return (
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="heading">FAQs</h1>

          <ul className="un-ordered-list">
            {faqsList.map(eachFaq => (
              <FaqItem
                eachFaq={eachFaq}
                key={eachFaq.id}
                showAnswer={this.showAnswer}
                isActiveFaq={ActiveFaqId === eachFaq.id}
                isAnswerShowed={isAnswerShowed}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
