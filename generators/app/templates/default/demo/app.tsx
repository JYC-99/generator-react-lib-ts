import * as React from 'react';
import { hot } from 'react-hot-loader';

import { Example } from '../src/index';

const Demo = () => (
  <Example />
);

export const App = hot(module)(Demo);