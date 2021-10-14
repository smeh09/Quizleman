import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../Styles/Header.css";
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
        <div className="searchContainer">
          <input className="searchInput" placeholder="Search" value={ searchInput } onChange={ (e) => setSearchInput(e.target.value) } />
          <button id="searchButton" onClick={ (e) => {
            if (searchInput.trim() !== "") {
              search()
            }
            else {
              alert("Please enter valid input")
              setSearchInput("");
            }
          } } className="button" type="submit">Search</button>
        </div>
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