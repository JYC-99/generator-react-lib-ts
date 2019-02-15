import * as React from 'react';

export const Functional<%= exportName %>: React.FunctionComponent<{ initialCount?: number }> = ({ initialCount = 0 }) => {
  const [count, setCount] = React.useState(initialCount);

  const handleClick = () => setCount(count + 1);

  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
