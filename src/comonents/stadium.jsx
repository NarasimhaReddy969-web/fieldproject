import React, { useState } from "react";
import "../comonents/sta.css"; // Ensure to update this with the correct path for the CSS file

const StadiumBooking = () => {
  const stadiums = [
    "National Stadium",
    "Grand Arena",
    "City Sports Complex",
    "Olympic Stadium",
    "Champion's Field",
    "Victory Ground",
    "Heritage Park",
    "Skyline Arena",
    "Thunder Dome",
    "Summit Stadium",
  ];

  const [selectedStadium, setSelectedStadium] = useState(stadiums[0]);
  const [date, setDate] = useState("");
  const [availableSeats, setAvailableSeats] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [ticketBooked, setTicketBooked] = useState(false);

  const updateSeats = (stadium) => {
    setSelectedStadium(stadium);
    setAvailableSeats(Math.floor(Math.random() * 100) + 1); // Randomize available seats for each stadium
  };

  const bookStadium = () => {
    if (!date || !paymentMethod) {
      setBookingMessage("Please select a date and payment method.");
      return;
    }
    setTicketBooked(true);
    setBookingMessage(`Booking confirmed for ${selectedStadium} on ${date}! ✅`);
  };

  return (
    <div className="stadium-container">
      {!ticketBooked ? (
        <div className="booking-form">
          <h1 className="text-2xl font-bold text-center">🏟️ Stadium Ticket Booking</h1>
          
          {/* Select Stadium */}
          <label className="block">🏟️ Select Stadium:</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedStadium}
            onChange={(e) => updateSeats(e.target.value)}
          >
            {stadiums.map((stadium, index) => (
              <option key={index} value={stadium}>
                {stadium}
              </option>
            ))}
          </select>

          {/* Select Date */}
          <label className="block">📅 Select Date:</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <h2 className="text-lg font-semibold">🪑 Available Seats: {availableSeats}</h2>

          {/* Payment Options */}
          <h2 className="text-lg font-semibold">💳 Payment Options</h2>
          <select
            className="w-full p-2 border rounded"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">-- Select Payment Method --</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="upi">UPI</option>
            <option value="paypal">PayPal</option>
          </select>

          {/* Book Now Button */}
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            onClick={bookStadium}
          >
            🎟️ Book Now
          </button>

          {/* Booking Message */}
          {bookingMessage && <p className="text-green-600 font-bold">{bookingMessage}</p>}
        </div>
      ) : (
        <div className="ticket-preview">
          {/* Ticket Preview */}
          <h2>Your Stadium Ticket</h2>
          <p><strong>Stadium:</strong> {selectedStadium}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Seats Reserved:</strong> {availableSeats}</p>
          <p><strong>Payment Method:</strong> {paymentMethod}</p>

          {/* Confirmation */}
          <button
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 mt-4"
            onClick={() => window.location.reload()}
          >
            🎟️ New Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default StadiumBooking;
