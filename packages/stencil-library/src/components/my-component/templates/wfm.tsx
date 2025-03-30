import { h } from '@stencil/core';

interface WfmProps {
  output: string; // This can be used to pass data to the template if needed
  age: number; // Example of an additional property you might want to use in the template
}

export const WfmTemplate = ({ output, age }: WfmProps) => {
  return (
    <div>
      <p>
        {`Hello from the WFM Template! - ${output}`} and I am {age} years sold
      </p>
    </div>
  );
};
// This is a simple functional component that returns a JSX element.
