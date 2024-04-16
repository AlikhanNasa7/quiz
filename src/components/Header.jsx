import React from 'react'

const Header = ({title}) => {
  return (
    <header>
        <img src="src/assets/quiz-logo.png" alt="icon" />
        <h1>{title}</h1>
    </header>
  )
}

export default Header