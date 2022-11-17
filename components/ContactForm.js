import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('Send');
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    // console.log(form);
    // // emailjs.sendForm('service_07ayim8', 'template_816losp', form.current, '2eb4mG48v4ePXqjiX')
    // //   .then((result) => {
    // //       console.log(result.text);
    // //   }, (error) => {
    // //       console.log(error.text);
    // //   });
    // console.log(conFom);
  };

  return (
    <div>
      <form
        className="flex flex-col h-[546px] bg-fill-portofolio -tablet:w-[328px]  w-[487px] rounded-lg mt-12 px-6 pt-6"
        onSubmit={onSubmit}
        ref={form}
      >
        <span className="text-white font-dmsans spacin body-1">Name</span>
        <input
          className="rounded-md bg-primary-portofolio border-1 border-gray-form h-[60px] p-3 mt-2"
          placeholder="Name"
          id="name"
        />
        <span className="text-white font-dmsans spacin body-1 pt-8">
          E-mail
        </span>
        <input
          className="rounded-md bg-primary-portofolio border-1 border-gray-form h-[60px] p-3 mt-2"
          placeholder="example@gmail.com"
          id="email"
        />
        <span className="text-white font-dmsans spacin body-1 pt-8">
          Message
        </span>
        <textarea
          className="rounded-md bg-primary-portofolio border-1 border-gray-form h-[150px] p-3 mt-4"
          placeholder="Hey..."
          id="message"
        />
        <button type="submit" className="btn btn-primary h-[58px] my-6">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
