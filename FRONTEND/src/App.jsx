import { Routes, Route } from 'react-router-dom';
//import './App.css'
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import Type from './components/Type';
import Teams from './components/Teams';
import SearchResult from './components/SearchResult';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemon" element={<Pokemon />} />
        <Route path="/types/:type" element={<Type />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/search/:pokemon" element={<SearchResult />} />
      </Routes>
    </>
  );
}

export default App;