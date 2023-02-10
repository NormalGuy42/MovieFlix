import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

// 5759c223
const API_URL = 'http://www.omdbapi.com?apikey=5759c223';

const App = ()=>{
    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    const [movies,setMovies] = useState([]);
    const [searchTerm,setsearchTerm] = useState('');

    useEffect(()=>{
        searchMovies('Batman')
    },[]);

    return(
        <div className="app">
            <h1>MovieFlix</h1>
            <div className="search">
                <input placeholder="Search for movies" value={searchTerm} onChange={(e)=> setsearchTerm(e.target.value)}/>
                <img src={SearchIcon} alt="search icon" onClick={searchMovies(searchTerm)}/>
            </div>
            {movies?.length >0?(
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                     ))}
                    </div>
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}
export default App;