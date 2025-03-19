import React, { useState } from "react";
import "../comonents/trains.css"; // Ensure to update the correct path for the CSS file

const TrainBooking = () => {
  const stations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "San Francisco", "Seattle", "Boston", "Denver", "Dallas"];
  const trains = ["Express 101", "Superfast 202", "Regional 303", "Bullet 404", "Nightliner 505", "SkyRail 606", "MetroX 707", "Intercity 808", "Rapid 909", "SilverLine 100"];

  const [from, setFrom] = useState(stations[0]);
  const [to, setTo] = useState(stations[1]);
  const [selectedTrain, setSelectedTrain] = useState(trains[0]);
  const [date, setDate] = useState("");
  const [availableSeats, setAvailableSeats] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [ticketBooked, setTicketBooked] = useState(false);

  const updateSeats = () => {
    setAvailableSeats(Math.floor(Math.random() * 100) + 1); // Randomize available seats for each train
  };

  const bookTrain = () => {
    if (!date || !paymentMethod) {
      setBookingMessage("Please select a date and payment method.");
      return;
    }
    setTicketBooked(true);
    setBookingMessage(`Booking confirmed for ${selectedTrain} from ${from} to ${to} on ${date}! ✅`);
  };

  return (
    <div className="train-container">
      {!ticketBooked ? (
        <div className="booking-form">
          <h1>🚆 Train Ticket Booking</h1>

          {/* From Station */}
          <label>📍 From:</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {stations.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>

          {/* To Station */}
          <label>📍 To:</label>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {stations.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>

          {/* Select Train */}
          <label>🚆 Select Train:</label>
          <select value={selectedTrain} onChange={(e) => { setSelectedTrain(e.target.value); updateSeats(); }}>
            {trains.map((train, index) => (
              <option key={index} value={train}>
                {train}
              </option>
            ))}
          </select>

          {/* Select Date */}
          <label>📅 Select Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <h2>🪑 Available Seats: {availableSeats}</h2>

          {/* Payment Options */}
          <h2>💳 Payment Options</h2>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">-- Select Payment Method --</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="upi">UPI</option>
            <option value="paypal">PayPal</option>
          </select>

          {/* Book Now Button */}
          <button className="book-now-btn" onClick={bookTrain}>🎟️ Book Now</button>

          {/* Booking Message */}
          {bookingMessage && <p className="booking-message">{bookingMessage}</p>}
        </div>
      ) : (
        <div className="ticket-preview">
          {/* Ticket Preview */}
          <h2>Your Train Ticket</h2>
          <p><strong>Train:</strong> {selectedTrain}</p>
          <p><strong>From:</strong> {from}</p>
          <p><strong>To:</strong> {to}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Seats Reserved:</strong> {availableSeats}</p>
          <p><strong>Payment Method:</strong> {paymentMethod}</p>

          {/* Confirmation Button */}
          <button
            className="new-booking-btn"
            onClick={() => window.location.reload()}
          >
            🎟️ New Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default TrainBooking;
