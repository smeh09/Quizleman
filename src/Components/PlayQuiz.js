import React, { useEffect, useState} from "react";
import { useParams, useLocation } from "react-router-dom";
import getAPIResult from "../Modules/GetAPIResult";
import Button from '@mui/material/Button';
import "../Styles/PlayQuiz.css";

export function PlayQuiz() {

  // eslint-disable-next-line
  const [ quizData, setQuizData ] = useState([]);
  // eslint-disable-next-line
  const [ quizNum, setQuizNum ] = useState(0);
  const [ currentQuestion, setCurrentQuestion ] = useState("");
  const [ currentQuestionOptions, setCurrentQuestionOptions ] = useState([]);
  const [ currentCorrectOption, setCurrentCorrectOption ] = useState("");
  const [ score, setScore ] = useState(0);

  const params = useParams();
  const quizId = params.id;

  const params2 = new URLSearchParams(useLocation().search);
  // eslint-disable-next-line
  const username = params2.get("username");
  const difficulty = params2.get("difficulty");

  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=5&category=${quizId}&difficulty=${difficulty}&type=multiple`;
    async function getData() {
      if (quizData.length === 0) {
        let data = await getAPIResult(url);
        data = data.results;
        setQuizData(data);
      }
      else {
        if (quizNum !== quizData.length) {
          setQuizData(quizData);
          setCurrentQuestion(quizData[quizNum].question);
          const options = [...quizData[quizNum]["incorrect_answers"], quizData[quizNum]["correct_answer"]];
          setCurrentQuestionOptions(options);
          setCurrentCorrectOption(quizData[quizNum]["correct_answer"]);
        }
      }
    }
    getData();
  }, [difficulty, quizId, quizNum, setQuizData, setCurrentQuestionOptions, quizData]);

  const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

  const handleCheck = async (option) => {

    const optionEl = document.getElementById(option);
    const oldBg = optionEl.style.backgroundColor;

    if (option === currentCorrectOption) {
      setScore(score + 10);
      optionEl.style.backgroundColor = "rgb(45, 224, 123)";
      await wait(1000);
      optionEl.style.backgroundColor = oldBg;
    }
    else {
      optionEl.style.backgroundColor = "rgb(255, 97, 97)";
      await wait(1000);
      optionEl.style.backgroundColor = oldBg;
    }
    if (quizNum !== quizData.length) {
      setQuizNum(quizNum + 1)
    }
  }

  if (quizData.length === 0) {
    return (
      <div className="loader"></div>
    )
  }
  else {
    if (quizNum !== quizData.length) {
      return (
        <div className="playQuiz">
          <div className="playQuizTop">
            <h1 className='question' dangerouslySetInnerHTML={{ __html: currentQuestion }}></h1>
          </div>
          <div className="quizBottom">
            <div className="options">
              { currentQuestionOptions.map(option => {
                return (
                  <div dangerouslySetInnerHTML={{ __html: option }} id={ option } onClick={ () => handleCheck(option) } key={ option } className="option">
                  </div>
                )
              }) }
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="scoreContainer">
          <h1>Your score : { score }</h1>
          <Button variant="contained" className="button">Store</Button>
        </div>
      )
    }
  }
}