import React from 'react'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
const Question = ({questionData,time, onSkip, selectedAnswer, answerState, onSelect}) => {
  return (
    <div id='question'>
            <QuestionTimer time={time} onTime={onSkip}/>
            <h2>{questionData.text}</h2>
            <Answers 
                answers={questionData.answers}
                selectedAnswer = {selectedAnswer}
                answerState = {answerState}
                onSelect = {onSelect}
            />
        </div>
  )
}

export default Question