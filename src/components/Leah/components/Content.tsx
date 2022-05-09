import React from 'react';
import ImgOne from '../images/egg.jpg';
import ImgTwo from '../images/egg-2.jpg';

export const Content = () => {
  return (
    <div className="flex flex-col font-mono lg:flex-row">
      <div className="lg:w-1/2" />
      <div className="menu-card ">
        <div className="box-card bg-slate-50">
          <div className="center-content">
            <div className="absolute top-0 left-0 text-gray-300 text-9xl">
              “
            </div>
            <h2 className="mb-3 text-2xl font-black text-gray-700/50">
              Programming Language:
            </h2>
            <p className="mb-2">
              HTML5 | CSS3 | Javascript(ES6) | Golang | TypeScript | PHP
            </p>
            <div className="absolute -bottom-7 -right-2 text-9xl leading-[0.2px] text-gray-300">
              ”
            </div>
          </div>
        </div>
        <div className="box-card bg-slate-100">
          <div className="center-content">
            <div className="absolute top-0 left-0 text-gray-300 text-9xl">
              “
            </div>
            <h2 className="mb-3 text-2xl font-black text-gray-700/50">
              Technologies:
            </h2>
            <p className="mb-2">
              React.js | Redis | Postman | Git | GitHub | Tailwind CSS |
              styled-components CSS | Sass/SCSS | Bootstrap | JQuery
            </p>
            <div className="absolute -bottom-7 -right-2 text-9xl leading-[0.2px] text-gray-300">
              ”
            </div>
          </div>
        </div>
        <div className="box-card bg-slate-200">
          <div className="center-content">
            <div className="absolute top-0 left-0 text-gray-300 text-9xl">
              “
            </div>
            <h2 className="mb-3 text-2xl font-black text-gray-700/50">
              Language:
            </h2>
            <p>✨ English - TOEIC 895 (Professional Working Proficiency),</p>
            <p className="mb-2">✨ French - DELF A2 (Elementary Proficiency)</p>
            <div className="absolute -bottom-7 -right-2 text-9xl leading-[0.2px] text-gray-300">
              ”
            </div>
          </div>
        </div>
        <div className="box-card bg-slate-200">
          <div className="center-content">
            <div className="absolute top-0 left-0 text-gray-300 text-9xl">
              “
            </div>
            <h2 className="mb-3 text-2xl font-black text-gray-700/50">
              {' '}
              Others skills:
            </h2>
            <p className="mb-2">
              Adobe Photoshop | Adobe Dreamweaver | Adobe XD | Figma | VSCode |
              Final Cut ProX | Premiere | Project management
            </p>
            <div className="absolute -bottom-7 -right-2 text-9xl leading-[0.2px] text-gray-300">
              ”
            </div>
          </div>
        </div>
        <div className="box-card bg-slate-50">
          <div className="center-content">
            <div className="absolute top-0 left-0 text-gray-300 text-9xl">
              “
            </div>
            <h2 className="mb-3 text-2xl font-black text-gray-700/50">
              Hobbies & Interests:
            </h2>
            <p className="mb-2">
              UX/UI Research | Challenging new things | Reading Scuba diving |
              Photography | Freediving | and many outdoor activities
            </p>
            <div className="absolute -bottom-7 -right-2 text-9xl leading-[0.2px] text-gray-300">
              ”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
