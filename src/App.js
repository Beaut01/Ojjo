import React from 'react'
import { Articles } from './components/Articles'
import { Events } from './components/Events'
import { Header } from './components/Header'
import { Salons } from './components/Salons'
import { Social } from './components/Social'
import { Advices } from './components/Advices'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='mainWrapper'>
      <Header />
      <Events />
      <Salons />
      <Articles />
      <Social />
      <Advices />
      <Footer />
    </div>
    
  );
}

export default App;
