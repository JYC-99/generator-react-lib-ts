import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';

import { Example } from '../src/index';

describe('Example', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Example />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
