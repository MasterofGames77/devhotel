import React from 'react'; // Importing React

// Room component receiving props (room and onSelect)
function Room2({ room, onSelect }) {
  // JSX returned by the Room component
  return (
    <div className="room">
      <h2>{room.type}</h2>
      <p>Price per Night: ${room.price}</p>
      <button onClick={() => onSelect(room)}>Select</button>
    </div>
  );
}

export default Room2;