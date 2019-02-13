import * as React from 'react';

export interface I<%= exportName %>Props {
  // define the props
}

interface I<%= exportName %>States {
  // define the states
}

export class <%= exportName %> extends React.Component<
  I<%= exportName %>Props,
  I<%= exportName %>States
> {
  constructor(props: I<%= exportName %>Props) {
    super(props);

    this.states = {
      // init states
    };
  }

  render() {
    <div>Placeholder for <%= exportName %></div>
  }
}
