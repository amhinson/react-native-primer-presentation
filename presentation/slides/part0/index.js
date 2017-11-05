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
    {notes.one}
    <Layout>
      <Fill>
        <Image src={images.airshipMark} />
      </Fill>
      <Fill>
        <Image src={images.reactNative} />
      </Fill>
    </Layout>
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      React Native Primer
    </Heading>
  </Slide>,

  <Slide>
    {notes.two}
    <Heading fit caps>
      Items Needed On Machine
    </Heading>
    <List>
      <ListItem>Code editor of choice (Visual Studio Code, etc.)</ListItem>
      <ListItem>
        Expo XDE (
        <Link href="https://expo.io/tools">https://expo.io/tools</Link>)
      </ListItem>
      <ListItem>Expo Client on mobile device</ListItem>
      <ListItem>Create account with Expo</ListItem>
    </List>
  </Slide>,

  <Slide>
    {notes.three}
    <Heading fit caps>
      Our Experience With Mobile Development
    </Heading>
    <List>
      <Appear>
        <ListItem>Native (Swift / Java)</ListItem>
      </Appear>
      <Appear>
        <ListItem>PhoneGap / Cordova</ListItem>
      </Appear>
      <Appear>
        <ListItem>React Native</ListItem>
      </Appear>
    </List>
  </Slide>,

  <Slide>
    {notes.four}
    <Heading fit caps>
      Betting on React Native
    </Heading>
    <List>
      <Appear>
        <ListItem>Community would continue to thrive</ListItem>
      </Appear>
      <Appear>
        <ListItem>Enhance user experiences</ListItem>
      </Appear>
      <Appear>
        <ListItem>Cut development time down</ListItem>
      </Appear>
    </List>
  </Slide>,

  <Slide>
    {notes.five}
    <Heading fit caps>
      What We Found
    </Heading>
    <List>
      <Appear>
        <ListItem>
          Community around React and React Native is very vibrant
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Growing pains & bugs of using a relatively new framework are getting
          smaller each day
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Our apps feel much more native than other hybrid solutions we've used
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>Development time was reduced</ListItem>
      </Appear>
      <Appear>
        <ListItem>100% of our team can work on our mobile projects</ListItem>
      </Appear>
    </List>
  </Slide>,

  <Slide>
    {notes.six}
    <Heading fit caps>
      Schedule For Today
    </Heading>
    <Text textAlign="left" margin="20px">
      Introduction to React Native
    </Text>
    <Text textAlign="left" margin="20px">
      Components
    </Text>
    <Text textAlign="left" margin="20px">
      Styling
    </Text>
    <Text textAlign="left" margin="20px">
      Build First React Native App!
    </Text>
  </Slide>
];
