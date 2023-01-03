import React, { useCallback, useState } from "react";
import Image from "next/image";

import { Button, Container } from "~/ui";
import { BackgroundDot } from "~/components";

const EMPTY_CONTACT_FORM = {
  email: "",
  name: "",
  message: "",
};

type TContactForm = typeof EMPTY_CONTACT_FORM;

const Contact = () => {
  const [form, setForm] = useState<TContactForm>(EMPTY_CONTACT_FORM);

  const handleSetFormField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setForm((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  return (
    <Container>
      <div className="relative flex items-start gap-x-16 pb-40 lg:-ml-9 lg:pb-20">
        <div className="absolute right-[20px] bottom-28 -z-10 flex-none lg:relative lg:bottom-0 lg:right-0">
          <BackgroundDot
            size={64}
            className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2"
          />
          <Image
            src="/images/sphere.svg"
            width={540}
            height={540}
            alt=""
            className="h-[540px] w-[540px]"
          />
          <BackgroundDot
            size={96}
            className="absolute right-0 bottom-0 translate-x-1/3 translate-y-2/3"
          />
        </div>
        <div>
          <strong className="max-w-[504px] text-5xl leading-[80px] text-white">
            Get In Touch
          </strong>
          <p className="max-w-[504px] pb-7 text-lg leading-7">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem.
          </p>
          <div className="flex max-w-[408px] flex-col gap-y-5">
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleSetFormField}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleSetFormField}
            />
            <textarea
              rows={6}
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleSetFormField}
            />
            <Button className="self-start">Get in Touch</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
