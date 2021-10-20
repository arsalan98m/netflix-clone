import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='section-center footer__center'>
        <div className='footer__title'>
          <h2>Questions? Contact us.</h2>
        </div>

        <div className='footer__container'>
          {/* Single Column */}
          <div>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Investor Relations</Link>
            <Link to='/'>Privacy</Link>
            <Link to='/'>Speed Test</Link>
          </div>

          {/* Single Column */}
          <div>
            <Link to='/'>Help Center</Link>
            <Link to='/'>Jobs</Link>
            <Link to='/'>Cookie Preferences</Link>
            <Link to='/'>Legal Notices</Link>
          </div>

          {/* Single Column */}
          <div>
            <Link to='/'>Account</Link>
            <Link to='/'>Way to Watch</Link>
            <Link to='/'>Corporate Information</Link>
            <Link to='/'>Only on Netflix</Link>
          </div>

          {/* Single Column */}
          <div>
            <Link to='/'>Media Center</Link>
            <Link to='/'>Terms of Use</Link>
            <Link to='/'>Contact Us</Link>
          </div>
        </div>

        <h4>Netflix</h4>
      </div>
    </footer>
  );
}

export default Footer;
