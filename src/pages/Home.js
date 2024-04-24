import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome To Assingment 4 with Routing by Jeremy Samuel</h1>
      <nav>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/assin1">Assignment 1: Change color of item</Link>
          </li>
          <li>
            <Link to="/basicForm">Assignment 2: Basic Form Page</Link>
          </li>
          <li>
            <Link to="/tictactoe">Assignment 3: Tic-Tac-Toe</Link>
          </li>
          <li>
            <Link to="/timetracking">Book Example 1: Time Tracking</Link>
          </li>
          <li>
            <Link to="/votingapp">Book Example 2: Voting App</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
