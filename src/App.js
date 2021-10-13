import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Quizzes } from "./Components/Quizzes";
import { Header } from "./Components/Header";
import { Quiz } from "./Components/Quiz";
import { PlayQuiz } from "./Components/PlayQuiz";

function App() {
  return (
    <div className="app">
      <Router>
        <Header title="QuizleMan" />
        <Switch>
          <Route exact path="/">
            {/* Landing page components here */}
          </Route>
          <Route exact path="/quizzes">
            {/* Quizzes page components here */}
            <Quizzes />
          </Route>
          <Route exact path='/quizzes/:id'>
            {/* Quiz page here */}
            <Quiz />
          </Route>
          <Route exact path='/playQuiz/:id'>
            {/* Play Quiz page here */}
            <PlayQuiz />
          </Route>
          <Route exact path="/about">
            {/* About page components here */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;