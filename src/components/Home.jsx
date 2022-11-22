import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import Categories from '../Categories'
import Error from './Error'
import "toastify-js/src/toastify.css";
import { useState } from 'react';
import Quiz from './Quiz'
import { useNavigate } from 'react-router-dom';



function Home({name , setName , difficulty , setDifficulty , category , setCategory, api , setApi , ctimeOne , setCtimeOne }) {
    
    const navigate = useNavigate();
    const [ error , setError ] = useState(false)
    
    const handleOnClick = () => {
        if(!name || !difficulty || !category) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 7000)
        } else {
            
            setError(false)
            fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`).then(res => res.json()).then((data) => {
                console.log(data)
                setApi(data.results)
                
            })
            navigate('/quiz')

        }
    }
    return (
    <div>
        <h1 className='quizify'>Quizify</h1>
        <div className='home_prompts_container'>
            <div className='home_promts'>
                <TextField variant='filled' label='enter your username' onChange={(e) => {setName(e.target.value)}} value={name}  />
                <FormControl sx={{ minWidth: 300 }}>
                    <InputLabel id="demo-simple-select-helper-label">category</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="category"
                    onChange={(e) => {setCategory(e.target.value)}}
                    value={category}
                    
                    >
                    
                    {Categories.map((cat) => {
                        return <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>
                    })}
                    </Select>
                
                </FormControl>
                    
                <FormControl sx={{  minWidth: 120 }}>

                    <InputLabel id="demo-simple-select-helper-label">difficulty</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="difficulty"
                    onChange={(e) => {setDifficulty(e.target.value)}}
                    value={difficulty}
                    
                    >
                    
                    <MenuItem  key="Easy" value="easy">Easy</MenuItem>
                    <MenuItem key="Medium" value="medium">Medium</MenuItem>
                    <MenuItem key="Hard" value="hard">Hard</MenuItem>
                    </Select>
                
                </FormControl>
                <Button onClick={handleOnClick} variant='contained'>Enter Quizify</Button>
                
            </div>
           {error ? <Error /> : null}
           
        </div>
        <p className='credits'>Made with ❤️ by Daniel Anitsa</p>
          <div style={{display: 'none'}}><Quiz api={api} setApi={setApi} /></div>        
    </div>
  )
}

export default Home