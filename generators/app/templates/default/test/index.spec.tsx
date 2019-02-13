import 'jest';
import * as React from 'react';
import * as renderer from 'react-test-renderer'
import * as Promise from 'bluebird';
import { shallow } from 'enzyme';

import { ComputesDialog } from '../src/computes-dialog';

describe('ComputesDialog', () => {
  it('renders correctly', () => {
    // Do not use enzyme here. Use react-test-renderer instead
    // It is a portal component(with ReactDom.createPortal called). Enzyme does not support it.
    const component = renderer.create(<ComputesDialog
      titleText="test title"
      subTitleText="test subtitle"
      onCancel={()=>{}}
      onSubmit={()=>{}}
      type="run"
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('showDialog works', (done) => {
    const wrapper = shallow(<ComputesDialog
      titleText="test title"
      subTitleText="test subtitle"
      onCancel={()=>{}}
      onSubmit={()=>{}}
      type="run"
    />);

    expect(wrapper.state('computes')).toEqual([]);
    expect(wrapper.state('hideDialog')).toEqual(false);

    const component = wrapper.instance() as ComputesDialog;

    component.showDialog(() => Promise.resolve([{
      name: 'test',
      id: 'test',
      vmSize: 1,
      currentNodeCount: 5,
      maxNodeCount: 6,
      location: 'test',
      provisioningState: 'test'
    }]));

    wrapper.update();

    setTimeout(() => { // defer
      expect(wrapper.state('computes')).toEqual([
        {
          name: 'test',
          id: 'test',
          vmSize: 1,
          currentNodeCount: 5,
          maxNodeCount: 6,
          location: 'test',
          provisioningState: 'test'
        }
      ]);
      expect(wrapper.state('hideDialog')).toEqual(false);
      done();
    }, 100);

  })
});
