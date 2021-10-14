import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../Styles/Header.css";
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

export function Header({ title }) {

  const [ searchInput, setSearchInput ] = useState("")

  const history = useHistory();

  const search = () => {
    history.push(`/quizzes?quiz=${searchInput}`);
    setSearchInput("");
  }

  return (
    <header>
      <div className="leftArea">
        <div className="title">
          { title }
        </div>
        <nav>
          <ul className="navList">
            <li className="navListItem">
              <Link to='/' className="navLink">Home</Link>
            </li>
            <li className="navListItem">
              <Link to='/about' className="navLink">About</Link>
            </li>
            <li className="navListItem">
              <Link to='/quizzes' className="navLink">Quizzes</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="rightArea">
      <FormControl className="formControl">
        <div className="searchContainer">
          <input className="searchInput" placeholder="Search" value={ searchInput } onChange={ (e) => setSearchInput(e.target.value) } />
          <Button id="searchButton" onClick={ (e) => search() } disabled={ !searchInput.trim() } className="button" variant="outlined" type="submit"><i className="fa fa-search" aria-hidden="true"></i></Button>
        </div>
        </FormControl>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: "Title",
}