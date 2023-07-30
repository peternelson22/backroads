import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className='section footer'>
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
