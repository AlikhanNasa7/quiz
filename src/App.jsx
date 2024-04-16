import React, { useState } from 'react'
import Header from './components/Header'
import Quiz from './components/Quiz'
const App = () => {
    const [quizFinished, setQuizFinished] = useState(false)
    const handler = ()=>{
        setQuizFinished(true)
    }
  return (
    <>
        <Header title="REACTQUIZ" classname = ""/>
        <Quiz setFinished={handler}></Quiz>
    </>
  )
}

export default App
