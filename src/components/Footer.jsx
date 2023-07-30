import { useGlobalContext } from '../hooks/useGlobalContext';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const { loginInfo } = useGlobalContext();
  console.log(loginInfo?.date);
  return (
    <footer className='section footer'>
      {loginInfo?.name ? (
        <p>Logged in user: {loginInfo?.name?.toUpperCase()}</p>
      ) : (
        <p>{`Today's date: ${loginInfo?.date}`}</p>
      )}
      <PageLinks classLink='footer-link' classLinks='footer-links' />

      <SocialLinks classIcons='footer-icons' classIcon='footer-icon' />

      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
