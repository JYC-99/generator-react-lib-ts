import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';

import { <%= exportName %>, Functional<%= exportName %> } from '../src/index';

describe('<%= exportName %>', () => {
  it('renders correctly', () => {
    // Do not use enzyme here. Use react-test-renderer instead
    // It is a portal component(with ReactDom.createPortal called). Enzyme does not support it.
    // const component = renderer.create(<<%= exportName %> />);
    // const tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    const wrapper = shallow(
      <<%= exportName %> />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Functional<%= exportName %>', () => {
  it('renders correctly', () => {
    // Do not use enzyme here. Use react-test-renderer instead
    // It is a portal component(with ReactDom.createPortal called). Enzyme does not support it.
    // const component = renderer.create(<<%= exportName %> />);
    // const tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    const wrapper = shallow(
      <Functional<%= exportName %> />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
