import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./comonents/home";
import Dashboard from "./comonents/Dashboard";
import MovieBooking from "./comonents/movie";
import StadiumBooking from "./comonents/stadium";
import TrainBooking from "./comonents/trains";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/movies" element={<MovieBooking />} />
        <Route path="/stadiums" element={<StadiumBooking />} />
        <Route path="/trains" element={<TrainBooking/>} />
      </Routes>
    </Router>
  );
}

export default App;
