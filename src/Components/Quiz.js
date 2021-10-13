import React, { useState } from "react";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Input from '@mui/material/Input';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router';
import "../Styles/Quiz.css";

export function Quiz() {

  const params = useParams();
  const quizId = params.id;

  const [ nameInput, setNameInput ] = useState("");
  const [ difficulty, setDifficulty ] = useState("easy");

  const history = useHistory();
  
  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/playQuiz/${quizId}?username=${nameInput}&difficulty=${difficulty}`);
  }

  return (
    <div className="quizForm">
      <form className="form" onSubmit={ (e) => handleSubmit(e) }>
        <h1 id="heading">Play a Quiz</h1>
        <FormControl className="formControl">
          <InputLabel>Your Name</InputLabel>
          <Input value={ nameInput } onChange={ (e) => setNameInput(e.target.value) } className='input'/>
        </FormControl>
        <FormControl className="formControl">
          <FormLabel className="formRadioHeading" component="legend">Difficulty</FormLabel>
          <RadioGroup className="radioGroup" onChange={(e) => { setDifficulty(e.target.value) }} aria-label="difficulty" defaultValue="easy" name="radio-buttons-group">
            <FormControlLabel value="easy" control={<Radio />} label="Easy" />
            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="hard" control={<Radio />} label="Hard" />
          </RadioGroup>
        </FormControl>
        <Button disabled={ !nameInput.trim() } className="button" variant="contained" type="submit">Start playing</Button>
      </form>
    </div>
  );
}