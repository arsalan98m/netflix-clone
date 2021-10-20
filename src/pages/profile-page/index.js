import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import avatar from '../../assests/images/avatar.png';
import './ProfilePage.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../config/firebase';
import Plans from '../../components/Plans';

function ProfilePage() {
  const user = useSelector(selectUser);

  return (
    <>
      <Navbar />
      <main className='section-center profilepage'>
        <section className='profilepage__body'>
          <h1>Edit Profile</h1>

          <div className='profilepage__info'>
            <img src={avatar} alt='avatar' />

            <div className='profilepage__details'>
              <h2>{user.email}</h2>

              <div className='profilepage__plans'>
                <h3>Plans</h3>
                <Plans />
                <button
                  className='profilepage__signout'
                  onClick={() => auth.signOut()}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ProfilePage;
