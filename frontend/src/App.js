import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Workout from './Workout';
import MyPage from './MyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/Workout" element={<Workout />} />
      </Routes>
    </Router>
  );
}

export default App;
