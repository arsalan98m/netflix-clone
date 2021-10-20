import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import MoviesRows from '../../components/MoviesRows';
import './home-page.css';

function HomePage() {
  return (
    <main className='homepage'>
      <Navbar />
      <Banner />
      <MoviesRows />
    </main>
  );
}

export default HomePage;
