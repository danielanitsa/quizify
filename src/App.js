import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AnimatedBg from "./components/AnimatedBg";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState();
  const [category, setCategory] = useState();
  const [api, setApi] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [newArray, setNewArray] = useState([
    "a question is missin i know , i can't fix it 😔",
  ]);
  return (
    <div>
      <AnimatedBg />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                category={category}
                setCategory={setCategory}
                api={api}
                setApi={setApi}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                difficulty={difficulty}
                category={category}
                api={api}
                setApi={setApi}
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                nextQuestion={nextQuestion}
                setNextQuestion={setNextQuestion}
                newArray={newArray}
                setNewArray={setNewArray}
              />
            }
          />
          <Route
            path="/results"
            element={
              <Results
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                name={name}
                api={api}
                newArray={newArray}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
