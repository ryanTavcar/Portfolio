import React from 'react'
import './css/App.css';
import './css/index.scss';

import Head from './components/Head'
import Main from './components/Main'
import Footer from './components/Footer'

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