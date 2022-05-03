import React, { ChangeEvent, FormEvent, useState } from 'react';

import emailjs from 'emailjs-com';
import './index.css';
import { Dialog } from './Dialog';
interface Props {}

export const Mailer: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
    <>
      {/* <div className="flex items-center justify-center w-1/2 my-20 ">
        <div className="w-full min-h-screen p-8">
          <div className="mx-auto overflow-hidden shadow-xl rounded-3xl w-max">
            <div className="relative mb-3 bg-gray-700 h-28 rounded-bl-4xl" /> */}
      <div className="px-10 pb-8 rounded-tr-4xl">
        <h1 className="text-2xl font-bold text-gray-700">Let's get in touch</h1>
        <form className="w-full mt-12" onSubmit={sendEmail}>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              className="contact-input peer "
              placeholder="ex:Lean from XX company"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name" className="contact-label">
              What's your name?
            </label>
          </div>
          <div className="relative mt-10 ">
            <input
              id="email"
              name="user_email"
              type="email"
              value={email}
              className="contact-input peer "
              placeholder="john@doe.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="contact-label">
              Your mail address
            </label>
          </div>

          <div className="relative mt-16 ">
            <textarea
              id="message"
              name="message"
              rows={4}
              className=" contact-textarea peer"
              placeholder="john@doe.com"
            />
            <label htmlFor="message" className="contact-label-textarea">
              Leave a message to Leah
            </label>
          </div>
          <span className="block text-sm font-medium text-center text-gray-300 ">
            {' '}
            Drag the textarea handle to see the expected behaviour{' '}
          </span>
          <input
            type="submit"
            onClick={openModal}
            value="Send"
            className="contact-sumbit"
          />
        </form>
      </div>
      {isOpen && <Dialog closeModal={closeModal} name={name} email={email} />}
    </>
  );
};
