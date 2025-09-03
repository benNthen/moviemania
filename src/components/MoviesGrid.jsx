import React, { useState, useEffect } from 'react'
import '../styles.css'
import MovieCard from './MovieCard'

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]) // setMovies is the state-function to updated movies(the state)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('movies.json') // fetches information from the file public/movies.json
      .then((response) => response.json())
      .then((data) => setMovies(data)) // automatically re-renders movies
  }, [])

  const handleSearchChange = (e) => {
    // event handler - re-render searchTerm on bar
    setSearchTerm(e.target.value)
  }

  // function called in movies-grid div to filter the list of movies by title entered inside search bar
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  )
}
