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
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom']} transitionDuration={500} theme={theme}>
        {Slides}
      </Deck>
    );
  }
}
