import React, { useState } from "react";
import axios from "axios";
import "../comonents/movie.css";

const MovieBooking = () => {
  const movies = ["Avengers", "Inception", "Titanic", "Interstellar", "The Dark Knight", "Avatar", "Joker", "Parasite", "Gladiator", "Shutter Island"];
  const theatres = ["IMAX", "Cineplex", "PVR", "Regal Cinemas", "AMC", "Cinemark", "INOX", "Cinepolis", "Landmark Cinemas", "Vue Cinemas"];
  const availableSeats = 100; // Assuming 100 seats available
  const paymentMethods = ["Credit Card", "Debit Card", "UPI", "PayPal"];

  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedTheatre, setSelectedTheatre] = useState(theatres[0]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [ticketDetails, setTicketDetails] = useState(null); // State to store ticket details
  const [formVisible, setFormVisible] = useState(true); // Control the visibility of the form

  const bookMovie = async () => {
    if (!selectedDate || !selectedTime || !paymentMethod) {
      setBookingMessage("Please fill in all the fields.");
      return;
    }

    // Store ticket details first
    const ticketData = {
      movie: selectedMovie,
      theatre: selectedTheatre,
      date: selectedDate,
      time: selectedTime,
      seats: selectedSeats,
      paymentMethod: paymentMethod,
    };

    setTicketDetails(ticketData); // Show the ticket immediately after clicking "Book Now"
    setFormVisible(false); // Hide the form after booking the ticket
    setBookingMessage(""); // Clear any previous booking message

    try {
      // Send the data to the backend API after displaying the ticket
      const response = await axios.post("http://localhost:5000/api/book-movie", ticketData);

      if (response.data.success) {
        setBookingMessage(response.data.message); // Show success message from backend
      } else {
        setBookingMessage("Booking failed, please try again.");
        setTicketDetails(null); // Clear ticket details if booking fails
      }
    } catch (error) {
      setBookingMessage("An error occurred. Please try again later.");
      setTicketDetails(null); // Clear ticket details on error
    }
  };

  return (
    <div className="movie-container">
      {/* Movie booking form */}
      {formVisible && (
        <div className="booking-form">
          <h1>🎬 Movie Ticket Booking</h1>

          {/* Movie Selection */}
          <label>🎥 Select Movie:</label>
          <select value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)}>
            {movies.map((movie, index) => (
              <option key={index} value={movie}>{movie}</option>
            ))}
          </select>

          {/* Theatre Selection */}
          <label>🏢 Select Theatre:</label>
          <select value={selectedTheatre} onChange={(e) => setSelectedTheatre(e.target.value)}>
            {theatres.map((theatre, index) => (
              <option key={index} value={theatre}>{theatre}</option>
            ))}
          </select>

          {/* Date and Time Selection */}
          <label>📅 Select Date:</label>
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

          <label>🕒 Select Time:</label>
          <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />

          {/* Seat Selection */}
          <label>🪑 Select Seats:</label>
          <input
            type="number"
            min="1"
            max={availableSeats}
            value={selectedSeats}
            onChange={(e) => setSelectedSeats(Number(e.target.value))}
          />

          {/* Payment Options */}
          <label>💳 Select Payment Method:</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">-- Select Payment Method --</option>
            {paymentMethods.map((method, index) => (
              <option key={index} value={method}>{method}</option>
            ))}
          </select>

          <button onClick={bookMovie}>🎟️ Book Now</button>

          {bookingMessage && <p className="booking-message">{bookingMessage}</p>}
        </div>
      )}

      {/* Show Ticket after Booking */}
      {ticketDetails && (
        <div className="ticket-preview">
          <h2>🎫 Your Ticket</h2>
          <p><strong>Movie:</strong> {ticketDetails.movie}</p>
          <p><strong>Theatre:</strong> {ticketDetails.theatre}</p>
          <p><strong>Date:</strong> {ticketDetails.date}</p>
          <p><strong>Time:</strong> {ticketDetails.time}</p>
          <p><strong>Seats:</strong> {ticketDetails.seats}</p>
          <p><strong>Payment Method:</strong> {ticketDetails.paymentMethod}</p>
          <p><strong>Status:</strong> Booking in progress...</p>
        </div>
      )}
    </div>
  );
};

export default MovieBooking;
