import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function FailedQuiz({name , correctAnswer , api , setCorrectAnswer , newArray , setNewArray}) {
    const navigate = useNavigate();
    const memes = [
        'https://media.tenor.com/do8q_eYrsW4AAAAM/crying-black-guy-meme.gif',
        'https://i.pinimg.com/736x/24/00/4f/24004f4c9290a8cdf113cee8df3bcd4d.jpg',
        'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F026%2F489%2Fcrying.jpg'
    ]
    let randomBoolean = Math.random() >= 0.5;
    
    const randomMeme = memes[Math.floor(Math.random() * memes.length)]
    return (
    <div>
        <div className='failed'>
            <h1>Fuck man (dont cancel me) {name} <br /> you failed the quiz test!😭</h1>
            <h2> your Score is: {correctAnswer + '/' + api.length}</h2>
            { randomBoolean === true ? <iframe width="390" height="200" src="https://www.youtube.com/embed/5mbDY8PaX74?autoplay=1"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe> : <img src={randomMeme} alt='crying_meme'  style={{width:300 , height: 'auto' , borderRadius: 15}}/>}
            
        <br />
        <Button variant='contained' sx={{minWidth: 300}} onClick={() => navigate('/')}>Retry!</Button>
        </div>
    </div>
  )
}

export default FailedQuiz