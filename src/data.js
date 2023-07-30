import tour1 from './assets/images/tour-1.jpeg';
import tour2 from './assets/images/tour-2.jpeg';
import tour3 from './assets/images/tour-3.jpeg';
import tour4 from './assets/images/tour-4.jpeg';
import tour5 from './assets/images/tour5.jpg';
import tour6 from './assets/images/tour-6.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.reddit.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    country: 'china',
    duration: 6,
    cost: 'from $1400',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  },
  {
    id: 2,
    img: tour2,
    date: 'may 4th, 2023',
    title: 'Mailand Cartel',
    country: 'nigeria',
    duration: 10,
    cost: 'from $2000',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  },
  {
    id: 3,
    img: tour3,
    date: 'november 20th, 2021',
    title: 'ottawa mare',
    country: 'canada',
    duration: 9,
    cost: 'from $800',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  },
  {
    id: 4,
    img: tour4,
    date: 'april 26th, 2022',
    title: 'Kenya Site',
    country: 'kenya',
    duration: 8,
    cost: 'from $1500',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  },
  {
    id: 5,
    img: tour5,
    date: 'april 26th, 2022',
    title: 'Babel and Sodom',
    country: 'Nigeria',
    duration: 4,
    cost: 'from $1500',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  },
  {
    id: 6,
    img: tour6,
    date: 'March 8th, 2022',
    title: 'The Taj Mahal',
    country: 'India',
    duration: 2,
    cost: 'from $2500',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  },
];

export const phones = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVyi5Zmm-oOSCm0mATvZu5kciWGIFJgaltQ&usqp=CAU',
    product: '10c',
    brand: 'Redmi',
    id: 1,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYsfP5OYpJaQ0-WxNw-dwPTyyMDjqLDQE_A&usqp=CAU',
    product: 'X plus',
    brand: 'iphone',
    id: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kxxITG6kiGTH7a4O00za6UCvSHdEg5d_BA&usqp=CAU',
    product: '2210',
    brand: 'Nokia',
    id: 3,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-eEqhPjhgJXamTePRQGr6Z_vv2_gSQsMoaw&usqp=CAU',
    product: 's12',
    brand: 'Samsung',
    id: 4,
  },
];

export const login = {
  name: 'Nelson',
  date: new Date().toDateString(),
};
