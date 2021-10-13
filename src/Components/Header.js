import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../Styles/Header.css";

export function Header({ title }) {
  return (
    <header>
      <div className="leftArea">
        <div className="title">
          { title }
        </div>
      </div>
      <div className="rightArea">
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
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: "Title",
}