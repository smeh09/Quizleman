import React from "react";
import "../Styles/QuizCard.css";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export function QuizCard(props) {
  return (
    <div className="quiz">
      <div className="quizTop">
        <img src={ props.image } alt={ props.title } />
      </div>
      <div className='quizBottom'>
        <div className='quizTitle'>
          <h1>{ props.title }</h1>
          <div className="quizButtonContainer">
            <Link to={ `/quizzes/${props.id}` }><Button className="quizButton" variant="contained">Play</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}