import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Pokemon from './components/Pokemon'
import Type from './components/Type'
import Teams from './components/Teams'
import SearchResult from './components/SearchResult'

function App() {

    return(
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pokemons/:pokemon' element={<Pokemon/>}/>
                <Route path='/:type' element={<Type/>}/>
                <Route path='/teams' element={<Teams/>}/>
                <Route path='/searchresults/:pokemon' element={<SearchResult/>}/>
            </Routes>
        </>
    )
}

export default App
