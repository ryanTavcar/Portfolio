import React from 'react'
import './css/App.css';

import Head from './components/shared/Head'
import Main from './components/shared/Main'
import Footer from './components/shared/Footer'

function App() {

  return (
    <div className="App">
      <Head/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;