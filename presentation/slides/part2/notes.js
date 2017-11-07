import React from 'react';
import { Notes } from 'spectacle';
import ReactMarkdown from 'react-markdown';
import notes1 from './notes_2_1.md';
import notes2 from './notes_2_2.md';
import notes3 from './notes_2_3.md';
import notes4 from './notes_2_4.md';
import notes5 from './notes_2_5.md';
import notes6 from './notes_2_6.md';
import notes7 from './notes_2_7.md';

const one = (
  <Notes>
    <ReactMarkdown source={notes1} />
  </Notes>
);

const two = (
  <Notes>
    <ReactMarkdown source={notes2} />
  </Notes>
);

const three = (
  <Notes>
    <ReactMarkdown source={notes3} />
  </Notes>
);

const four = (
  <Notes>
    <ReactMarkdown source={notes4} />
  </Notes>
);

const five = (
  <Notes>
    <ReactMarkdown source={notes5} />
  </Notes>
);

const six = (
  <Notes>
    <ReactMarkdown source={notes6} />
  </Notes>
);

const seven = (
  <Notes>
    <ReactMarkdown source={notes7} />
  </Notes>
);

export default {
  one,
  two,
  three,
  four,
  five,
  six,
  seven
};
