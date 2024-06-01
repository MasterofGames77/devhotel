import React, { useState } from 'react';
import Room from './room';

// An array of hotel room objects.
const rooms = [
  { id: 1, type: 'Single Bed', price: 100 },
  { id: 2, type: 'Double Bed', price: 150 },
  { id: 3, type: 'Suite', price: 200 },
];

function App() {
  // State hooks to manage the selected room, number of days, and total price.
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [days, setDays] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0)

  // Handles the room selection, update states, and calculates the total price.
  const handleRoomSelect = (room) => {
    setSelectedRoom(room)
    calculateTotalPrice(room.price, days)
  };

  // Handles changes in the number of days, and recalculates the total price.
  const handleDaysChange = (e) => {
    const days = parseInt(e.target.value, 10)
    setDays(days)
    if (selectedRoom) {
      calculateTotalPrice(selectedRoom.price, days); // Recalculate the total price
    }
  };

  // Calculates the total price based on the room and number of days 
  const calculateTotalPrice = (price, days) => {
    setTotalPrice(price * days) // Update the total price
  };

  // JSX returned by the App component
  return (
    <div className="App">
      <h1>Dev Hotel</h1>
      <div className="rooms">
        {rooms.map((room) => (
          <Room key={room.id} room={room} onSelect={handleRoomSelect} />
        ))}
      </div>
      <div className="booking">
        <label>
          Number of Days:
          <input type="number" value={days} onChange={handleDaysChange} min="1" />
        </label>
        {selectedRoom && (
          <div>
            <h2>Selected Room: {selectedRoom.type}</h2>
            <h3>Total Price: ${totalPrice}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;