import React from 'react';
import './App.css';
import {useState} from 'react';
import Questions from './components/questions';

function Appquiz() {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
 
  const presentQuestion = Questions[questionIndex];
  const getIndex = (i) => {

    if(presentQuestion.answer === (i + 1))
    {
        setScore(score + 1);
    }
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < Questions.length)
    {
      setQuestionIndex(questionIndex + 1);
    }
    else {
      setResult(true);
    }
  }

  const replay = () => {
    setQuestionIndex(0);
    setScore(0);
    setResult(false);
  }
  
  

  return (
    <> 
    <div class="container">
      <div class="row">

        {result ? (<><h1>Your Result : {score}</h1> <button onClick={replay}>Replay</button></>) : (

        <div class="col-4">
          <h2>Your Score :  {score}</h2>
          <h2>{presentQuestion.question}</h2>
           <ul>
            {
              presentQuestion.options.map((option, i) => {
                return <li onClick={() => {return getIndex(i)}}>{option} {i}</li>
              })
            }
           </ul>
        </div>
        )}

      </div>
    </div>
    </>
  );
} 

export default Appquiz;
