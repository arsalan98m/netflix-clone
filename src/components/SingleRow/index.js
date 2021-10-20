import useMovies from '../../hooks/useMovies';
import Slider from 'react-slick';
import MovieCard from '../MovieCard';
import { sliderSettings } from '../../utils/utils';
import axios from '../../config/axios';

import './SingleRow.css';
import { useState } from 'react';

function SingleRow({ title, fetchUrl, isLargeRow = false }) {
  const { movies } = useMovies(fetchUrl);
  const [isVideo, setIsVideo] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);

  const playTrailer = async (video, id) => {
    const url = `/movie/${parseInt(id)}/videos?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US`;

    const request = await axios.get(url);
    const data = request.data.results;

    const trailer = data.find((d) => d.type === 'Trailer');
    const tempTrailer = `https://www.youtube.com/embed/${trailer?.key}?autoplay=1`;
    setTrailerUrl(tempTrailer);

    if (!isVideo || trailerUrl !== tempTrailer) {
      setIsVideo(true);
    } else {
      setIsVideo(false);
    }
  };

  return (
    <>
      {movies.length > 0 ? (
        <div className='singlerow'>
          <h2 className='singlerow__title'>{title}</h2>
          <Slider {...sliderSettings}>
            {movies.map(
              ({
                poster_path,
                backdrop_path,
                id,
                name,
                overview,
                first_air_date,
                vote_average,
                title,
                original_name,
                release_date,
                video,
              }) => (
                <MovieCard
                  key={id}
                  poster={poster_path}
                  backPoster={backdrop_path}
                  isLargeRow={isLargeRow}
                  title={name || title || original_name}
                  description={overview}
                  date={first_air_date || release_date}
                  rating={vote_average}
                  onClick={playTrailer}
                  video={video}
                  id={id}
                />
              )
            )}
          </Slider>
        </div>
      ) : null}

      {isVideo && (
        <iframe
          className='moviesrows__trailer'
          width='100%'
          height='345'
          title='trailer'
          frameborder='0'
          src={`${trailerUrl}`}
        ></iframe>
      )}
    </>
  );
}

export default SingleRow;
