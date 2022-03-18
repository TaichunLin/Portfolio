import React from 'react';
import { Links } from './Links';
import { SocialMedia } from './socialMedia';

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <div className=" text-primary-50">
      <div className="flex justify-center p-2 m-2">
        <Links />
      </div>
      <SocialMedia />
    </div>
  );
};
