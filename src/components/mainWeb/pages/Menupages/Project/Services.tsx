import React from 'react';
import { Projects } from '../../../model/Projects';

interface Props {}

export const Services: React.FC<Props> = () => {
  return (
    <div>
      {Projects.map((project) => (
        <div>
          <h1>{project.name}</h1>
          <p>{project.topLine}</p>
        </div>
      ))}
    </div>
  );
};
