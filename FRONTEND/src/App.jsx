import { Routes, Route } from 'react-router-dom';
//import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Pokemon from './components/Pokemon';
import Type from './components/Type';
import Teams from './components/Teams';
import Team from './components/Team';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemon" element={<Pokemon />} />
        <Route path="/types/:type" element={<Type />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/team/:slug" element={<Team />} />
        <Route path="/search/:pokemon" element={<SearchResult />} />
      </Routes>
    </>
  );
}

export default App;