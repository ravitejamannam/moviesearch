import React, { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [query, setQuery] = useState('');

  const API_KEY = 'e965b55629e35da7318892534c0a2774'  ;

  const searchMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies();
  };

  const handleMovieSelect = async (id) => {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
    const data = await response.json();
    setSelectedMovie(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Search App</h1>
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
          />
          <button type="submit">Search</button>
        </form>
        <div className="movies">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} onSelect={handleMovieSelect} />
          ))}
        </div>
        {selectedMovie && <MovieDetail movie={selectedMovie} />}
      </header>
    </div>
  );
}

export default App;
