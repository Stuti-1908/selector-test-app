import React, { useState } from 'react';
import './App.css';

function App() {
  const [buttonText, setButtonText] = useState('Click Me');
  const [showInput, setShowInput] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="main-title">Dynamic React Test App</h1>
        <button
          id="new-action-btn"
          onClick={() => {
            setButtonText(buttonText === 'Click Me' ? 'Clicked!' : 'Click Me');
          }}
        >
          {buttonText}
        </button>
        <a href="#" id="link-home">
          Home Link
        </a>
      </header>
    </div>
  );
}

export default App;