import React from 'react';
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/solid';
import '../../index.css';
interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const features = [
  {
    name: 'Competitive exchange rates',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    icon: LightningBoltIcon,
  },
  {
    name: 'Mobile notifications',
    icon: AnnotationIcon,
  },
];

export const SideBar: React.FC<Props> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={
        isSidebarOpen
          ? 'fixed top-0 left-0 z-40 flex flex-col w-20 h-screen text-primary-50 bg-secondary-50 shdow-lg '
          : 'hidden'
      }
      onClick={toggleSidebar}
    >
      <div className="mt-28">
        {features.map((feature) => (
          <div key={feature.name} className="flex">
            <dl className="relative flex p-3 mx-auto my-2 transition-all duration-300 ease-in-out border-4 rounded-full shadow-lg cursor-pointer w-14 h-14 center bg-bg border-primary-50 hover:text-bg hover:bg-primary-50 group hover:ease-in-out">
              <feature.icon />

              <dd className="absolute flex w-auto p-2 ml-2 text-xs font-bold transition-all duration-300 origin-left scale-0 rounded-md shadow-md center min-w-max bg-secondary-50 left-14 text-bg group-hover:scale-100">
                {feature.name}
              </dd>
            </dl>
            {/* <span className="sidebar-tooltip">{feature.name}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};
