import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaQuestionCircle, FaFilm, FaTrain, FaFutbol, FaHistory, FaPhone } from "react-icons/fa";
import { useState } from "react";
import "../comonents/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  
  // State to control the visibility of support and help sections
  const [isSupportVisible, setSupportVisible] = useState(false);
  const [isHelpVisible, setHelpVisible] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);

  // Dummy user data for profile
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 123 456 7890"
  };

  // Toggle visibility of the "Contact Support" section
  const toggleSupport = () => setSupportVisible(!isSupportVisible);
  
  // Toggle visibility of the "Help" section
  const toggleHelp = () => setHelpVisible(!isHelpVisible);
  
  // Show Profile Details on Sidebar
  const toggleProfile = () => setProfileVisible(!isProfileVisible);

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="dashboard-header">
        <h1>Booking Dashboard</h1>
        <div className="header-icons">
          <FaQuestionCircle className="icon" onClick={toggleHelp} />
          <FaUserCircle className="icon" onClick={toggleProfile} />
        </div>
      </header>

      {/* Booking Options */}
      <section className="dashboard-options">
        <div className="booking-card" onClick={() => navigate("/movies")}>
          <FaFilm className="booking-icon" />
          <p>Movie Booking</p>
        </div>
        <div className="booking-card" onClick={() => navigate("/trains")}>
          <FaTrain className="booking-icon" />
          <p>Train Booking</p>
        </div>
        <div className="booking-card" onClick={() => navigate("/stadiums")}>
          <FaFutbol className="booking-icon" />
          <p>Stadium Booking</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="dashboard-footer">
        <div className="footer-item" onClick={() => navigate("/history")}>
          <FaHistory className="footer-icon" />
          <p>History</p>
        </div>
        <div className="footer-item" onClick={toggleSupport}>
          <FaPhone className="footer-icon" />
          <p>Contact Support</p>
        </div>
        <input type="text" className="search-bar" placeholder="Search..." />
      </footer>

      {/* Sidebar for Profile */}
      {isProfileVisible && (
        <div className="sidebar-profile">
          <h3>User Profile</h3>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
        </div>
      )}

      {/* Contact Support Section */}
      {isSupportVisible && (
        <div className="support-section">
          <h3>Contact Support</h3>
          <p>If you need assistance, feel free to reach out to us:</p>
          <p><strong>Phone Number:</strong> +1 800 123 4567</p>
          <p><strong>Email:</strong> support@example.com</p>
        </div>
      )}

      {/* Help Section */}
      {isHelpVisible && (
        <div className="help-section">
          <h3>Help and Instructions</h3>
          <p>Welcome to the Booking Dashboard! Here's how to use the app:</p>
          <ul>
            <li><strong>Movie Booking:</strong> Select a movie to view showtimes and book tickets.</li>
            <li><strong>Train Booking:</strong> Select your destination and book your train tickets.</li>
            <li><strong>Stadium Booking:</strong> Select your favorite stadium and book your tickets.</li>
            <li><strong>History:</strong> View your past bookings and reservations.</li>
          </ul>
          <p>If you have any issues, please contact support via the footer.</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
