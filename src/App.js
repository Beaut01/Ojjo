import React from 'react'
import { Articles } from './components/Articles'
import { Events } from './components/Events'
import { Header } from './components/Header'
import { Salons } from './components/Salons'

function App() {
  return (
    <div className='mainWrapper'>
      <Header />
      <Events />
      <Salons />
      <Articles />
    </div>
    
  );
}

export default App;
