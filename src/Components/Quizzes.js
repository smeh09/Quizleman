import React from "react";
import { QuizCard } from "./QuizCard";
import { useLocation } from "react-router-dom";
import "../Styles/Quizzes.css";
import art from "../Images/art.png";
import boardGame from "../Images/board-game.png";
import book from "../Images/book.png";
import computers from "../Images/computers.png";
import film from "../Images/film.png";
import gadgets from "../Images/gadgets.png";
import geography from "../Images/geography.png";
import gk from "../Images/gk.png";
import history from "../Images/history.png";
import maths from "../Images/maths.png";
import music from "../Images/music.png";
import scienceNature from "../Images/science-nature.png";
import sports from "../Images/sports.png";
import vehicles from "../Images/vehicles.png";
import videoGame from "../Images/video-game.png";

const quizData = require("../RenderData.json");

const allQuizzes = () => {
  let image;
  return (
    <div className="quizzes">
      { quizData.map((quiz) => {
        switch (quiz.image) {
          case "gk.png":
            image = gk;
            break;
          case "book.png":
            image = book;
            break;
          case "film.png":
            image = film;
            break;
          case "music.png":
            image = music;
            break;
          case "video-game.png":
            image = videoGame;
            break;
          case "board-game.png":
            image = boardGame;
            break;
          case "science-nature.png":
            image = scienceNature;
            break;
          case "computers.png":
            image = computers;
            break;
          case "maths.png":
            image = maths;
            break;
          case "sports.png":
            image = sports;
            break;
          case "geography.png":
            image = geography;
            break;
          case "history.png":
            image = history;
            break;
          case "art.png":
            image = art;
            break;
          case "gadgets.png":
            image = gadgets;
            break;
          case "vehicles.png":
            image = vehicles;
            break;
          default:
            break;
        }
        return (
          <QuizCard key={ quiz.id } title={ quiz.name } image={image} id={ quiz.id } />
        )
      }) }
    </div>
  );
}

const searchedQuiz = (quizName) => {
  let renderingQuizzes = [];
  quizData.forEach(quiz => {
    if (quiz.name.toLowerCase().includes(quizName.toLowerCase())) {
      renderingQuizzes.push(quiz);
    }
  });

  let image;
  if (renderingQuizzes.length === 0) {
    return (
      <div className="results">
        <img className="noResultsFoundImg" src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="No quiz found" />
      </div>
    );
  }
  return (
    <div className="results">
    <h1 className="resultsHeading">Search results for <span className="italic">{ quizName }</span></h1>
    <div className="quizzes">
      { renderingQuizzes.map((quiz) => {
        switch (quiz.image) {
          case "gk.png":
            image = gk;
            break;
          case "book.png":
            image = book;
            break;
          case "film.png":
            image = film;
            break;
          case "music.png":
            image = music;
            break;
          case "video-game.png":
            image = videoGame;
            break;
          case "board-game.png":
            image = boardGame;
            break;
          case "science-nature.png":
            image = scienceNature;
            break;
          case "computers.png":
            image = computers;
            break;
          case "maths.png":
            image = maths;
            break;
          case "sports.png":
            image = sports;
            break;
          case "geography.png":
            image = geography;
            break;
          case "history.png":
            image = history;
            break;
          case "art.png":
            image = art;
            break;
          case "gadgets.png":
            image = gadgets;
            break;
          case "vehicles.png":
            image = vehicles;
            break;
          default:
            break;
        }
        return (
          <QuizCard key={ quiz.id } title={ quiz.name } image={image} id={ quiz.id } />
        )
      }) }
    </div>
    </div>
  );
}

export function Quizzes() {
  const params = new URLSearchParams(useLocation().search);
  const quizName = params.get("quiz");

  if (quizName !== null) {
    return searchedQuiz(quizName);
  }
  else {
    return allQuizzes();
  }
}