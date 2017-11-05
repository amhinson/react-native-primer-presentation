import React from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

import Slides from './slides';
import images from '../assets';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

preloader(images);

const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: 'white',
    tertiary: '#03A9FC',
    quartenary: 'white'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="pacman"
        transition={['fade', 'zoom']}
        transitionDuration={500}
        theme={theme}
      >
        {Slides}
      </Deck>
    );
  }
}
