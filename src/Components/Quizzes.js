import React from "react";
import { QuizCard } from "./QuizCard";
import "../Styles/Quizzes.css";

const quizData = require("../RenderData.json");

export function Quizzes() {
  return (
    <div className="quizzes">
      { quizData.map(quiz => {
        return (
          <QuizCard key={ quiz.id } title={ quiz.name } image={ quiz.image } id={ quiz.id } />
        )
      }) }
    </div>
  );
}