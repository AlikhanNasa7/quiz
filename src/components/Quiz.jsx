import React, { useState, useCallback } from 'react'
import questions from '/src/assets/questions'
import shuffle from '../assets/shuffle'
import Question from './Question'
const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([])
    const [answerState, setAnswerState] = useState('unanswered')
    console.log(userAnswers)

    const activeQuestionIndex = answerState==='unanswered'? userAnswers.length: userAnswers.length-1

    const handleSelectAnswer = useCallback((selectedAnswer) =>{
        setAnswerState('answered')
        setUserAnswers(prev=>[...prev,selectedAnswer])

        setTimeout(()=>{
            if (selectedAnswer===questions[activeQuestionIndex].answers[0]){
                setAnswerState('correct')
            }else{
                setAnswerState('wrong')
            }

            setTimeout(()=>{
                setAnswerState('unanswered')
            },2000)
        },1000)
    },[activeQuestionIndex])

    const handleSkipAnswer = useCallback(() =>
        handleSelectAnswer(null)
    ,[handleSelectAnswer])

    if (activeQuestionIndex==questions.length){
        return (
            <div id='summary'>
                <img src="/src/assets/quiz-complete.png" alt="complete-icon" />
                <h2>QUIZ FINISHED</h2>
            </div>
        )
    }
    const questionData = questions[activeQuestionIndex]

  return (
    <div id='quiz'>
        <Question 
            key={activeQuestionIndex}
            questionData={questionData} 
            onSkip={handleSkipAnswer} 
            time={10000} 
            answerState={answerState}
            selectedAnswer={userAnswers[userAnswers.length-1]}
            onSelect = {handleSelectAnswer}
        />
    </div>
  )
}

export default Quiz