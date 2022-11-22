import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Button} from '@mui/material';
import { shuffle } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { LinearProgress } from '@mui/material';


function Quiz({api , setApi , correctAnswer , setCorrectAnswer , nextQuestion , setNextQuestion , newArray , setNewArray }) {

const correctQuestionsAnswered = []
const [value , setValue] = useState("")
const [colorButton , setColorButton] = useState()
const [progress , setProgress] = useState(0)
 
const navigate = useNavigate()

const handleCheckAnswer = (i) => {
  setProgress((prevProgress) => (prevProgress >= 100? 0 : prevProgress + 10));
  setValue(i)
  console.log(value)
  console.log(nextQuestion)
  if(i === api[nextQuestion].correct_answer) {
    setColorButton('success')
    setNewArray((arr) => { return [nextQuestion + '.' + '' + api[nextQuestion].question, ...arr]}) 
    console.log(newArray) 
  // correctQuestionsAnswered.push(nextQuestion + '.' + '' + api[nextQuestion].question)
    // console.log(correctQuestionsAnswered)
    setTimeout(() => {
      console.log('correct answer')
    
    setNextQuestion(nextQuestion + 1)
    setColorButton()
    setCorrectAnswer(correctAnswer + 1)
    
    console.log(correctAnswer)
    }, 750)
    

  } if(i !== api[nextQuestion].correct_answer) {
    alert(api[nextQuestion].correct_answer)
    setColorButton('error')
  
    setTimeout(() => {
      setNextQuestion(nextQuestion + 1)
      setColorButton()
      
    },750)
  } 
}

if(nextQuestion === 10) {
  navigate('/results')
}

const answers = [api[nextQuestion]?.correct_answer,
  api[nextQuestion]?.incorrect_answers[0], 
  api[nextQuestion]?.incorrect_answers[1], 
  api[nextQuestion]?.incorrect_answers[2], 
  ]
  answers.sort(() => 0.5 - Math.random());
  console.log(answers)

  return (
    <div>
      
         {api.length > 0 ? (
              <div className='questionaire'>
                
                <h1 dangerouslySetInnerHTML={{__html: api[nextQuestion]?.question}} className='question_asked' />
                <div className='answers'>
                  {answers.map((i) => {
                    return <Button variant='contained' color={colorButton} sx={{width: {sm: 300 , md:400}}} onClick={() => handleCheckAnswer(i)}   key={i}>{i}</Button>
                  })}
                 
                </div>
                <LinearProgress variant="determinate" value={progress} sx={{width: {sm:300 , md: 860} , marginTop:5 , height: 20 , borderRadius: 3} } color='secondary' />
              </div>
                  
         ): (
          <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh"
            >
              <CircularProgress/>
          </Box>
         )} 
      
    </div>
  )
}

export default Quiz