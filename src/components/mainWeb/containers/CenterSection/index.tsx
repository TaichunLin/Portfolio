import React from 'react';
import Counter from './Counter';
import { FeatureSections } from './FeatureSections';

interface Props {}

export const CenterSection: React.FC<Props> = () => {
  return (
    <div>
      <Counter buttonText="Click Me!" />
      <FeatureSections />
    </div>
  );
};
