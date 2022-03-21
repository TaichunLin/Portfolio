import React, { ChangeEvent, FormEvent } from 'react';

import emailjs from 'emailjs-com';
interface Props {}

export const Mailer: React.FC<Props> = () => {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_cayj6mn',
        'template_ybu4tto',
        e.currentTarget,
        'my98Aw68aMyrkN94a',
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
    e.currentTarget.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="p-8 md:w-1/2">
        <div className="w-full mx-auto overflow-hidden bg-white shadow-xl rounded-3xl">
          <div className="relative h-28 bg-primary-50 rounded-bl-4xl">
            <svg
              className="absolute bottom-0 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
            <h1 className="text-2xl font-bold text-gray-900">Don't wait!</h1>
            <form className="mt-12" onSubmit={sendEmail}>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className=" contact-input peer"
                  placeholder="john@doe.com"
                />
                <label htmlFor="name" className="contact-label">
                  Name
                </label>
              </div>
              <div className="relative mt-10 ">
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  className=" contact-input peer"
                  placeholder="john@doe.com"
                />
                <label htmlFor="email" className="contact-label">
                  Email address
                </label>
              </div>

              <div className="relative mt-16">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="contact-textarea peer "
                  placeholder="john@doe.com"
                />
                <label htmlFor="message" className="contact-label-textarea">
                  Message
                </label>
              </div>
              <input type="submit" value="Send" className="contact-sumbit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
