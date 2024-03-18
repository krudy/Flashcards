import React from 'react';
import './App.css';
import Flashcards from './components/Flashcards/Flashcards';
import Results from './components/Results/Results';

function App() {
  return (
    <div className='App'>
      <div className="content-container">
        <Flashcards />
        <Results />
      </div>
    </div>
  )
}

export default App;