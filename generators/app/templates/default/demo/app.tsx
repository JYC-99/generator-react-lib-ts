import * as React from 'react';
import { hot } from 'react-hot-loader'

import { <%= exportName %> } from '../src/index';

export const App = hot(module)(<%= exportName %>);
