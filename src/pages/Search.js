import { useState } from 'react'
import { searchMovies } from '../services/api'
import { Link } from 'react-router-dom'

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query) return
    const data = await searchMovies(query)
    setResults(data.results || [])
  }

  return (
    <div className="container">
      <h1>Buscar películas</h1>

      <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Escribe el nombre..."
          style={{
            padding: '10px',
            width: '250px',
            marginRight: '10px',
            borderRadius: '5px',
            border: 'none'
          }}
        />
        <button
          style={{
            padding: '10px 15px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Buscar
        </button>
      </form>

      <div className="grid">
        {results.map(m => (
          <Link key={m.id} to={`/movie/${m.id}`} className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
              alt={m.title}
            />
            <div className="title">{m.title}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}