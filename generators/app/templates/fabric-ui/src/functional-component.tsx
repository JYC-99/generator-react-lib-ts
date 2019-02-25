import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export const Functional<%= exportName %>: React.FunctionComponent<{ initialCount?: number }> = ({ initialCount = 0 }) => {
  const [count, setCount] = React.useState(initialCount);

  const handleClick = () => setCount(count + 1);

  const alertClicked =  () => {
    alert('clicked');
  }

  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={handleClick}>Click me</button>
      <DefaultButton
        data-automation-id="test"
        allowDisabledFocus={true}
        disabled={false}
        checked={false}
        text="Button"
        onClick={alertClicked}
      />
    </div>
  );
};
