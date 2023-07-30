/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { memo } from 'react';
import { socialLinks } from '../data';

const SocialLinks = ({ classIcons, classIcon }) => {
  return (
    <ul className={classIcons}>
      {socialLinks.map((social) => (
        <li key={social.id}>
          <a
            href={social.href}
            className={classIcon}
            target='_blank'
            rel='noreferrer'
          >
            <i className={social.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};
export default memo(SocialLinks);
