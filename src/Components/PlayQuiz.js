import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import getAPIResult from "../Modules/GetAPIResult";

export function PlayQuiz() {

  // eslint-disable-next-line
  const [ quizData, setQuizData ] = useState([]);
  // eslint-disable-next-line
  const [ quizNum, setQuizNum ] = useState(0);
  const [ currentQuestion, setCurrentQuestion ] = useState("");
  const [ currentQuestionOptions, setCurrentQuestionOptions ] = useState([]);

  const params = useParams();
  const quizId = params.id;

  const params2 = new URLSearchParams(useLocation().search);
  // eslint-disable-next-line
  const username = params2.get("username");
  const difficulty = params2.get("difficulty");

  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=10&category=${quizId}&difficulty=${difficulty}&type=multiple`;
    async function getData() {
      let data = await getAPIResult(url);
      data = data.results;
      setQuizData(data);
      setCurrentQuestion(data[quizNum].question);
      const options = [...data[quizNum]["incorrect_answers"], data[quizNum]["correct_answer"]];
      setCurrentQuestionOptions(options);
    }
    getData();
  }, [difficulty, quizId, quizNum, setQuizData, setCurrentQuestionOptions]);

  return (
    <div className="playQuiz">
      <div className="playQuizTop">
        <h1 className='question' dangerouslySetInnerHTML={{ __html: currentQuestion }}></h1>
      </div>
      <div className="quizBottom">
        <div className="options">
          { currentQuestionOptions.map(option => {
            return (
              <div key={ option } className="option">
                { option }
              </div>
            )
          }) }
        </div>
      </div>
    </div>
  );
}