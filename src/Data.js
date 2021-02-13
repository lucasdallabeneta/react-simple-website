export const heroTitle = 'titulo';

export const heroSubtitle = 'subtitulo';

export const links = ['About', 'Discover', 'Services'];

export const sections = [
  {
    id: 'About',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'About topLine',
    headLine: 'About headLine',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    hasButton: true,
    buttonLabel: 'button label',
    imgStart: true,
    img: require('./img/svg-2.svg').default,
    alt: 'img',
    dark: false,
    primary: false,
    darkText: false,
  },
  {
    id: 'Discover',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Discover topLine',
    headLine: 'Discover headLine',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    hasButton: false,
    buttonLabel: 'button label',
    imgStart: false,
    img: require('./img/svg-3.svg').default,
    alt: 'img',
    dark: true,
    primary: true,
    darkText: true,
  },
];

export const services = [
  {
    title: 'service 1 title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    img: require('./img/svg-2.svg').default,
  },
  {
    title: 'service 2 title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    img: require('./img/svg-3.svg').default,
  },
  {
    title: 'service 3 title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    img: require('./img/svg-2.svg').default,
  }
];