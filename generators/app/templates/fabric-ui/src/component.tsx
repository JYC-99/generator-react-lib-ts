import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

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

  public render() {
    return (
      <div>
        <DefaultButton
          data-automation-id="test"
          allowDisabledFocus={true}
          disabled={false}
          checked={false}
          text="Button"
          onClick={this._alertClicked}
        />
      </div>
    );
  }

  private _alertClicked(): void {
    alert('Clicked');
  }
}
