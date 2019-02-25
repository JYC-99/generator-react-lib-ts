import * as React from 'react';
import { hot } from 'react-hot-loader';

import { <%= exportName %>, Functional<%= exportName %> } from '../src/index';

const Demo = () => (
  <div>
    <div>
      <%= exportName %>
    </div>

    <<%= exportName %> />

    <div>
      Functional<%= exportName %>
    </div>

    <Functional<%= exportName %> />
  </div>
);

export const App = hot(module)(Demo);