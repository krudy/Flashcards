import React from 'react';
import './App.css';
import Flashcards from './components/Flashcards/Flashcards';
import Results from './components/Results/Results';

function App() {
  return (
    <div className='App'>

      <h1 className='app-Name'><span className='app-Name-Flashcards'>Flashcards</span><br/>The Game</h1>
      <div className="content-container">
        <Flashcards />
        <Results />
      </div>
    </div>
  )
}

export default App;