import { cloneElement } from 'react';

import Part0 from './part0';
import Part1 from './part1';
import Part2 from './part2';

const slides = [].concat(Part0, Part1, Part2);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));
