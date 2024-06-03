import React, { useState } from 'react';
import Room2 from './room2';

// An array of hotel room objects.
const rooms = [
  { id: 1, type: 'Lake View', price: 250 },
  { id: 2, type: 'Park View', price: 300 },
  { id: 3, type: 'Deluxe Studio', price: 350 },
  { id: 4, type: '1 Bedroom Suite', price: 450},
  { id: 5, type: '2 Bedroom Suite', price: 550}
];

function App() 
{
    // State hooks to manage selected room, number of days, check-in date, total price, and booking confirmation
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [numDays, setNumDays] = useState(1);
    const [checkInDate, setCheckInDate] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [bookingConfirmed, setBookingConfirmed] = useState(false);
  
    // Function to handle room selection, updates state, and calculates total price
    const handleRoomSelect = (room2) => {
      setSelectedRoom(room2); // Update selected room state
      calculateTotalPrice(room2.price, numDays); // Calculate total price based on selected room and number of days
      setBookingConfirmed(false); // Reset booking confirmation
    };
  
    // Function to handle change in number of days, updates state, and recalculates total price
    const handleNumDaysChange = (e) => {
      const days = parseInt(e.target.value, 10); // Convert input value to an integer
      setNumDays(days); // Update number of days state
      if (selectedRoom) {
        calculateTotalPrice(selectedRoom.price, days); // Recalculate total price if a room is selected
      }
    };
  
    // Function to handle change in check-in date, updates state
    const handleCheckInDateChange = (e) => {
      setCheckInDate(e.target.value); // Update check-in date state
    };
  
    // Function to calculate total price based on room price and number of days
    const calculateTotalPrice = (price, daysCount) => {
      setTotalPrice(price * daysCount); // Update total price state
    };
  
    // Function to handle booking confirmation
    const handleBooking = () => {
      setBookingConfirmed(true); // Set booking confirmation to true
    };
  
    // Function to calculate check-out date based on check-in date and number of days
    const calculateCheckOutDate = (checkIn, days) => {
      const checkInDate = new Date(checkIn);
      checkInDate.setDate(checkInDate.getDate() + days);
      return checkInDate.toISOString().split('T')[0];
    };
  
    const checkOutDate = checkInDate ? calculateCheckOutDate(checkInDate, numDays) : '';
  
    // JSX returned by the App component
    return (
      <div className="App">
        <h1>Dev Hotel</h1>
        <div className="rooms">
          {/* Mapping over rooms array to render a Room component for each room */}
          {rooms.map((room) => (
            <Room2 key={room.id} room={room} onSelect={handleRoomSelect} />
          ))}
        </div>
        <div className="booking">
          <label>
            Number of Days:
            {/* Input field for number of days, with an onChange event handler */}
            <input type="number" value={numDays} onChange={handleNumDaysChange} min="1" />
          </label>
          <br></br>
          <label>
            Check-in Date:
            {/* Input field for check-in date, with an onChange event handler */}
            <input type="date" value={checkInDate} onChange={handleCheckInDateChange} />
          </label>
          {/* Conditional rendering: only show selected room, total price, check-out date, and booking button if a room is selected */}
          {selectedRoom && (
            <div>
              <h2>Selected Room: {selectedRoom.type}</h2>
              <h3>Total Price: ${totalPrice}</h3>
              <h3>Check-out Date: {checkOutDate}</h3>
              <button onClick={handleBooking}>Confirm Booking</button>
            </div>
          )}
          {/* Conditional rendering: show confirmation message if booking is confirmed */}
          {bookingConfirmed && (
            <div>
              <h2>Booking Confirmed!</h2>
              <p>
                You have successfully booked the {selectedRoom.type} room for {numDays} days.
                Check-in date is {checkInDate} and check-out date is {checkOutDate}.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default App;