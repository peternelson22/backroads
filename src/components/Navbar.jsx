import logo from '../assets/images/logo.svg';
import Login from './Login';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <PageLinks id='nav-links' classLinks='nav-links' classLink='nav-link' />

        <SocialLinks classIcons='nav-icons' classIcon='nav-icon' />
        <Login />
      </div>
    </nav>
  );
};
export default Navbar;
