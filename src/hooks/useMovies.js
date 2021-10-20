import { useState, useEffect } from 'react';
import axios from '../config/axios';

function useMovies(fetchUrl) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchMovies();
  }, [fetchUrl]);

  return { movies };
}

export default useMovies;
