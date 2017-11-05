import { cloneElement } from 'react';

import Part0 from './part0';
import Part1 from './part1';

const slides = [].concat(Part0, Part1);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));
