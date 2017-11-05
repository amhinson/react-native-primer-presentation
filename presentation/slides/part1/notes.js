import React from 'react';
import { Notes } from 'spectacle';
import ReactMarkdown from 'react-markdown';
import notes1 from './notes_1_1.md';
import notes3 from './notes_1_3.md';
import notes4 from './notes_1_4.md';
import notes5 from './notes_1_5.md';
import notes7 from './notes_1_7.md';
import notes8 from './notes_1_8.md';
import notes9 from './notes_1_9.md';
import notes10 from './notes_1_10.md';
import notes11 from './notes_1_11.md';
import notes12 from './notes_1_12.md';

const one = (
  <Notes>
    <ReactMarkdown source={notes1} />
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

const seven = (
  <Notes>
    <ReactMarkdown source={notes7} />
  </Notes>
);

const eight = (
  <Notes>
    <ReactMarkdown source={notes8} />
  </Notes>
);

const nine = (
  <Notes>
    <ReactMarkdown source={notes9} />
  </Notes>
);

const ten = (
  <Notes>
    <ReactMarkdown source={notes10} />
  </Notes>
);

const eleven = (
  <Notes>
    <ReactMarkdown source={notes11} />
  </Notes>
);

const twelve = (
  <Notes>
    <ReactMarkdown source={notes12} />
  </Notes>
);

export default {
  one,
  three,
  four,
  five,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve
};
