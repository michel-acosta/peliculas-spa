import { useEffect, useState } from 'react'
import { getPopular } from '../services/api'
import { Link } from 'react-router-dom'

export default function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const load = async () => {
      const data = await getPopular()
      setMovies(data.results || [])
    }
    load()
  }, [])

  return (
    <div className="container">
      <h1>Películas populares</h1>

      <div className="grid">
        {movies.map(m => (
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