import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { truncateString } from '../../utils/utils';
import './MovieCard.css';

function MovieCard({
  isLargeRow,
  poster,
  backPoster,
  title,
  description,
  date,
  rating,
  video,
  id,
  onClick,
}) {
  // rating = your_Rating*5
  // sume of rating in my case is  10
  // rating = 8.7*5/10
  const READABLE_RATING = (rating * 5) / 10;

  const imageUrl = `https://image.tmdb.org/t/p/original/${
    isLargeRow ? poster : backPoster
  }`;

  return (
    <article
      className={`moviecard ${isLargeRow && 'moviecard--largeRow'}`}
      onClick={() => onClick(video, id)}
    >
      <Link to='/'>
        <img
          src={imageUrl}
          alt={title}
          className={`moviecard__poster ${
            isLargeRow && 'moviecard__posterLarge'
          }`}
        />

        <div className='moviecard__back'>
          <h4>
            {truncateString(title, 10)}({new Date(date).getFullYear()})
          </h4>
          {isLargeRow && <p>{truncateString(description, 25)}</p>}
          <div className='moviecard__rating'>
            <Rating
              name='half-rating-read'
              value={READABLE_RATING}
              precision={0.5}
              size={'small'}
              readOnly
            />
            <span className='moviecard__ratingText'>{READABLE_RATING}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default MovieCard;
