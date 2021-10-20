import { useEffect, useState } from 'react';
import logo from '../../assests/images/logo.png';
import avatar from '../../assests/images/avatar.png';
import { useHistory } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);

    return () => window.removeEventListener('scroll', transitionNavbar);
  }, []);

  return (
    <nav className={`navbar ${show && 'navbar--black'}`}>
      <div className='section-center navbar__center'>
        <div className=' navbar__contents'>
          <img
            onClick={() => history.push('/')}
            src={logo}
            className='navbar__logo'
            alt='netflix'
          />
          <img
            onClick={() => history.push('/profile')}
            src={avatar}
            className='navbar__avatar'
            alt='netflix avatar'
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
