import { h } from '@stencil/core';

interface WfmProps {
  output: string; // This can be used to pass data to the template if needed
}

export const RunTemplate = ({ output }: WfmProps) => {
  return (
    <div>
      <p>{`Hello from the RUN Template! - ${output}`}</p>
    </div>
  );
};
