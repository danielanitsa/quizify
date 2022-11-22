import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Confeti from './Confeti'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function PassedQuiz({name , correctAnswer , api , setCorrectAnswer , newArray , setNewArray}) {
    const memes = [
        'https://media.tenor.com/IoLbzTnEqEsAAAAd/brent-rambo-loop.gif',
        'https://www.unilad.co.uk/wp-content/uploads/2020/12/122091216_194906708666485_1155858819270838587_o.jpg',
        'https://media.wired.com/photos/5e3246cd56bcac00087f0a1e/master/pass/Culture-Success-Meme-Kid.jpg',
        'https://static.wikia.nocookie.net/gyropedia/images/3/3b/SHIVA.jpg/revision/latest/smart/width/250/height/250?cb=20120128070942',
        'https://media.tenor.com/7HUogy7rXs4AAAAM/feel-me-think-about-it.gif'
    ]
    const randomMeme = memes[Math.floor(Math.random() * memes.length)]
    const navigate = useNavigate();
    const[showConfetti , setShowConfetti] = useState(true)
    setTimeout(() => {
        setShowConfetti(false)
    }, 10000)
    return (
    <div>
        {showConfetti ? <Confeti /> : null}
        <div className='congrats'>
            <h1>Hooraaay {name} , you passed <br /> the quiz test!🥳</h1>
            <h2> your Score is: {correctAnswer + '/' + api.length}</h2>
        <img src={randomMeme} alt='success' style={{width:300 , height: 'auto' , borderRadius: 15}} />
        <br />
        <Button variant='contained' sx={{minWidth: 300}} onClick={() => navigate('/')}>Play Again!</Button>
        </div>
        
        
        
    </div>
  )
}

export default PassedQuiz