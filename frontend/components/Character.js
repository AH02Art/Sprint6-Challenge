import React, { useState } from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [ toggle, setToggle ] = useState(false);

  return (
    <div 
      onClick={() => setToggle(!toggle)}
      className="character-card"
    >
      <h3 className="character-name">{props.character.name}</h3>
      { toggle && (
        <p>
          Planet: {" "}
          <span className="character-planet">{props.character.homeworld.name}</span>
        </p>
      )}
    </div>
  );
};

export default Character;