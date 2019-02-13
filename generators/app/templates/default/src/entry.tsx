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

    this.state = {
      // init stat
    };
  }

  render() {
    return (
      <div>Placeholder for <%= exportName %></div>
    );
  }
}
