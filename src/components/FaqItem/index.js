// Write your code here.

import './index.css'

const FaqItem = props => {
  const {eachFaq, showAnswer, isAnswerShowed, isActiveFaq} = props
  const {id, questionText, answerText} = eachFaq

  const onClickShowAnswer = () => {
    showAnswer(id)
  }

  const altText = isAnswerShowed === false && isActiveFaq ? 'minus' : 'plus'
  console.log(altText)

  const imageUrl =
    isAnswerShowed === false && isActiveFaq
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  return (
    <li className="container">
      <div className="faq-item-container">
        <div className="faq">
          <h1 className="faq-question">{questionText}</h1>
          <button type="button" className="btn" onClick={onClickShowAnswer}>
            <img src={imageUrl} alt={altText} className="faqs-icon" />
          </button>
        </div>
        {isAnswerShowed === false && isActiveFaq ? (
          <p className="faq-answer">{answerText}</p>
        ) : (
          ''
        )}
      </div>
    </li>
  )
}

export default FaqItem
