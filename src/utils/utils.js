import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

export function truncateString(string, number) {
  return string?.length > number
    ? string.substring(0, number - 1) + '...'
    : string;
}

export const sliderSettings = {
  arrows: true,
  accessibility: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  mobileFirst: true,

  nextArrow: (
    <button className='arrow-button'>
      <ArrowForwardIos className='slick-arrow' />
    </button>
  ),
  prevArrow: (
    <button className='arrow-button'>
      <ArrowBackIos className='slick-arrow' />
    </button>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};
