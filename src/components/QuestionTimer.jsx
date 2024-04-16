import React, { useState,useEffect } from 'react'

const QuestionTimer = ({time, onTime}) => {
    const [remainingTime, setRemainingTime] = useState(time)

    useEffect(()=>{
        console.log('Timeout')
        const timeout = setTimeout(()=>{
            onTime()
        }, time)

        return () =>{
            clearTimeout(timeout)
        }

    },[time, onTime])

    useEffect(()=>{
        console.log('Interval')
        const interval = setInterval(()=>{
            setRemainingTime(prev=>prev-100)
        },100)

        return () =>{
            clearInterval(interval)
        }
        
    },[])

  return (
    <progress id='question-time' max={time} value={remainingTime}></progress>
  )
}

export default QuestionTimer