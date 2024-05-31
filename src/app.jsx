import React, { useState } from 'react';
import Room from './room';

const rooms = [
  { id: 1, type: 'Single', price: 100 },
  { id: 2, type: 'Double', price: 150 },
  { id: 3, type: 'Suite', price: 200 },
];

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [days, setDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    calculateTotalPrice(room.price, days);
  };

  const handleDaysChange = (e) => {
    const days = parseInt(e.target.value, 10);
    setDays(days);
    if (selectedRoom) {
      calculateTotalPrice(selectedRoom.price, days);
    }
  };

  const calculateTotalPrice = (price, days) => {
    setTotalPrice(price * days);
  };

  return (
    <div className="App">
      <h1>Hotel Booking</h1>
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