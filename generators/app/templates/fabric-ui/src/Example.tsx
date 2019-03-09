import { DefaultButton } from "office-ui-fabric-react";
import * as React from "react";

export interface IExampleProps {
  initialCount?: number;
}

interface IExampleStates {
  count: number;
}

export class Example extends React.PureComponent<
  IExampleProps,
  IExampleStates
> {
  constructor({
    initialCount = 0,
  }: IExampleProps) {
    super({
      initialCount,
    });

    this.state = {
      count: initialCount,
    };
  }

  public render(): React.ReactNode {
    return (
      <div>
        <div>current count {this.state.count}</div>
        <DefaultButton
          data-automation-id="test"
          allowDisabledFocus={true}
          disabled={false}
          checked={false}
          text="Button"
          onClick={this._handleClick}
        />
      </div>
    );
  }

  private readonly _handleClick = () => {
    this.setState((curState) => ({
      count: curState.count + 1,
    }));
  }
}
