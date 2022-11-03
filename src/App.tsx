import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Random from './routes/Random';
import AuthorQuotes from './routes/AuthorQuotes';

import './App.css';

function App() {
    return (
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Random/>} />
            <Route path="/:author" element={<AuthorQuotes />} />
          </Routes>
        </main>
      </>
    );
}

export default App
