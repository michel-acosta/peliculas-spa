import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovie } from '../services/api'

export default function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    getMovie(id).then(setMovie)
  }, [id])

  if (!movie) return <div className="container">Cargando...</div>

  return (
    <div className="container">
      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        style={{ maxWidth: '300px', borderRadius: '10px' }}
        alt={movie.title}
      />

      <p>{movie.overview}</p>
      <p>⭐ {movie.vote_average}</p>
    </div>
  )
}