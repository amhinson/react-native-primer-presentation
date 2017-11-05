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
  S,
  Slide
} from 'spectacle';

import { Code, ListItem, Text } from '../../components';

import notes from './notes';

export default [
  <Slide>
    {notes.one}
    <Heading fit caps>
      What is React Native
    </Heading>
    <Text textAlign="left" textSize="18">
      With React Native, you don't build a “mobile web app”, an “HTML5 app”, or
      a “hybrid app”. You build a real mobile app that's indistinguishable from
      an app built using Objective-C or Java. React Native uses the same
      fundamental UI building blocks as regular iOS and Android apps. You just
      put those building blocks together using JavaScript and React.
    </Text>
  </Slide>,

  <Slide>
    <Heading fit caps>
      Who's using React Native?
    </Heading>
    <List>
      <ListItem>Facebook</ListItem>
      <ListItem>Instagram</ListItem>
      <ListItem>Airbnb</ListItem>
      <ListItem>Walmart</ListItem>
      <ListItem>Tesla</ListItem>
      <ListItem>Microsoft</ListItem>
      <ListItem>Amazon</ListItem>
    </List>
  </Slide>,

  <Slide>
    {notes.three}
    <Heading fit caps>
      React Native Preconceptions
    </Heading>
    <List>
      <Appear>
        <ListItem>
          Just another hybrid framework that "wraps" a website and call it an
          app
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>Write once, run everywhere</ListItem>
      </Appear>
    </List>
  </Slide>,

  <Slide>
    {notes.four}
    <Heading fit caps>
      What Makes React Native Different
    </Heading>
    <List margin="0 0 200px">
      <Appear>
        <ListItem textSize="40px">
          Based on the JavaScript framework React
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize="40px">
          Rendered real native UI components instead of a web view, which helps
          the app “feel native” (gestures, etc.)
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize="40px">
          Better performance than other hybrid solutions
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize="40px">
          Has hot reloading option so you can update your app without
          recompiling
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize="40px">
          Easily use native code when required
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize="40px">
          Can be used inside a native application
        </ListItem>
      </Appear>
    </List>
  </Slide>,

  <Slide>
    {notes.five}
    <Heading fit caps>
      Cons of React Native
    </Heading>
    <List>
      <Appear>
        <ListItem>
          Not great for high performance apps (physics-based games, etc.)
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>Requires a general knowledge of how React works</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Keeping app up-to-date with latest React Native versions is tough
        </ListItem>
      </Appear>
    </List>
  </Slide>,

  <Slide>
    <Heading fit caps>
      React Native
    </Heading>
    <Text caps>At a High Level</Text>
  </Slide>,

  <Slide>
    {notes.seven}
    <Heading fit caps>
      Relationship with React Framework
    </Heading>
    <Text>
      React Native uses the same underlying base that React uses, so the
      workflows & syntax are basically the same.
    </Text>
  </Slide>,

  <Slide>
    {notes.eight}
    <Heading fit caps>
      Platforms
    </Heading>
    <Text>iOS & Android</Text>
    <Text>Other experimental libraries (web, desktop, VR, etc.)</Text>
  </Slide>,

  <Slide>
    {notes.nine}
    <Heading fit caps>
      Native API
    </Heading>
    <Text>
      React Native exposes a large number of native APIs so you can interact
      with native modules. For native modules that aren't currently exposed,
      there is mostly likely another 3rd party library that does.
    </Text>
  </Slide>,

  <Slide>
    {notes.ten}
    <Heading fit caps>
      Components
    </Heading>
    <List>
      <Appear>
        <ListItem>Components are the building blocks for your app</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          React Native has multiple common components that can be used
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          They each use platform-specific native UI components
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <Code>{'<View />'}</Code> renders as a <Code>UIView</Code> for iOS and{' '}
          <Code>android.view</Code> for Android
        </ListItem>
      </Appear>
    </List>
  </Slide>,

  <Slide>
    {notes.eleven}
    <Heading fit caps>
      JavaScript Bridge
    </Heading>
    <List>
      <Appear>
        <ListItem>
          React Native apps are fully native, but contain a JavaScript thread
          where the logic of the app is run
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          The JS thread communicates with the native code by talking over a
          “bridge”, where data is being sent back and forth between the two
        </ListItem>
      </Appear>
    </List>
  </Slide>,

  <Slide>
    {notes.twelve}
    <Heading fit caps>
      Create App: Option 1
    </Heading>
    <Text caps>
      <S type="bold underline">No need</S> to follow on your computer along yet
    </Text>
  </Slide>
];
