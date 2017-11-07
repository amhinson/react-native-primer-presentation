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
  List,
  Notes,
  Quote,
  Slide
} from 'spectacle';

import { ListItem, Text } from '../../components';

import images from '../../../assets';
import notes from './notes';

export default [
  <Slide>
    <Heading fit caps>
      New JavaScript Syntax
    </Heading>
    <Heading size={1} caps lineHeight={1} textColor="secondary">
      ES6 / ES7
    </Heading>
  </Slide>,
  <Slide>
    {notes.one}
    <Heading>import</Heading>
    <CodePane
      source={require('raw-loader!./code/import.example')}
      lang="javascript"
      textSize="25px"
    />
  </Slide>,
  <Slide>
    {notes.two}
    <Heading>class</Heading>
    <CodePane
      source={require('raw-loader!./code/class.example')}
      lang="javascript"
      textSize="22px"
    />
  </Slide>,
  <Slide>
    {notes.three}
    <Heading>const / let</Heading>
    <CodePane
      source={require('raw-loader!./code/variables.example')}
      lang="javascript"
      textSize="22px"
    />
  </Slide>,
  <Slide>
    {notes.four}
    <Heading>Arrow Functions</Heading>
    <CodePane
      source={require('raw-loader!./code/functions.example')}
      lang="javascript"
      textSize="22px"
    />
  </Slide>,
  <Slide>
    {notes.five}
    <Heading>Destructuring</Heading>
    <CodePane
      source={require('raw-loader!./code/destructuring.example')}
      lang="javascript"
      textSize="26px"
    />
  </Slide>,
  <Slide>
    {notes.six}
    <Heading>Object Spread</Heading>
    <CodePane
      source={require('raw-loader!./code/objectSpread.example')}
      lang="javascript"
      textSize="22px"
    />
  </Slide>,
  <Slide>
    {notes.seven}
    <Heading>Template Literals</Heading>
    <CodePane
      source={require('raw-loader!./code/templateLiterals.example')}
      lang="javascript"
      textSize="26px"
    />
  </Slide>,
  <Slide />
];
