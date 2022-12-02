// Write your code here.
import './index.css'

import {Component} from 'react'

import FaqItem from '../FaqItem/index'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqsList: props.faqsList,
    }
  }

  render() {
    const {faqsList} = this.state

    return (
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="heading">FAQs</h1>

          <ul className="un-ordered-list">
            {faqsList.map(eachFaq => (
              <FaqItem eachFaq={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
