import { useNavigate } from "react-router-dom";
import "../comonents/home.css";
import image1 from "../assets/image1.jpg";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Centered Image */}
      <img
        src={image1} // Replace with your actual image path
        alt="Welcome"
        className="welcome-image"
      />

      {/* Start Button */}
      <button className="start-button" onClick={() => navigate("/dashboard")}>
        Start
      </button>
    </div>
  );
}

export default HomePage;
