import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
interface Props {}

const socialInfos = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    href: '/',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: '/',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    href: '/',
  },
  {
    name: 'Youtube',
    icon: FaYoutube,
    href: '/',
  },
];

export const SocialIcons: React.FC<Props> = () => {
  return (
    <div className="flex space-x-10">
      {socialInfos.map((socialInfo) => (
        <div key={socialInfo.name} className="">
          <a
            className="text-2xl"
            href={socialInfo.href}
            target="_blank"
            aria-label={socialInfo.name}
          >
            <socialInfo.icon />
          </a>
        </div>
      ))}
    </div>
  );
};
