import React from 'react';

// Hotel Room component receiving props
function Room({ room, onSelect }) 
{
  // JSX returned by the room component
  return (
    <div className="room">
      <h2>{room.type}</h2>
      <p>Price per Night: ${room.price}</p>
      <button onClick={() => onSelect(room)}>Select</button>
    </div>
  );
}

export default Room;