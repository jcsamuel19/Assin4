import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import Assin1 from "./pages/Assin1";
import BasicForm from "./pages/BasicForm";
import TicTacToe from "./pages/TicTacToe";
import TimeTracking from "./pages/TimeTracking";
import VotingApp from "./pages/VotingApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assin1" element={<Assin1 />} />
        <Route path="/basicForm" element={<BasicForm />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/timetracking" element={<TimeTracking />} />
        <Route path="/votingapp" element={<VotingApp />} />
      </Routes>
    </Router>
  );
}

export default App;
