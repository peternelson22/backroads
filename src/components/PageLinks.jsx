/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { memo } from 'react';
import { pageLinks } from '../data';

const PageLinks = ({ id, classLink, classLinks }) => {
  return (
    <ul className={classLinks} id={id}>
      {pageLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} className={classLink}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default memo(PageLinks);
