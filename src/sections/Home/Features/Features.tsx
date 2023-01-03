import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "~/ui";

const FEATURES = [
  {
    icon: "/icons/box.svg",
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
  },
  {
    icon: "/icons/layers.svg",
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
  },
  {
    icon: "/icons/shapes.svg",
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
  },
  {
    icon: "/icons/text.svg",
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
  },
  {
    icon: "/icons/pencils.svg",
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
  },
  {
    icon: "/icons/screen.svg",
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
  },
];

const TEXT_VARIANTS = {
  hidden: {
    y: -40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const CARD_VARIANTS = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Features = () => (
  <Container className="pb-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        margin: "0px 0px -300px 0px",
        once: true,
      }}
    >
      <motion.strong
        variants={TEXT_VARIANTS}
        className="max-w-[578px] pb-1 text-5xl leading-[80px] text-white"
      >
        Features
      </motion.strong>
      <motion.p
        variants={TEXT_VARIANTS}
        transition={{
          delay: 0.2,
        }}
        className="max-w-[578px] pb-8 text-lg leading-7"
      >
        A good design is not only aesthetically pleasing, but also functional.
        It should be able to solve the problem.
      </motion.p>
      <div className="grid grid-cols-3 gap-[30px]">
        {FEATURES.map((item, idx) => (
          <motion.button
            key={`home-features-item-${idx}`}
            variants={CARD_VARIANTS}
            transition={{
              delay: 0.4 + idx * 0.2,
            }}
            className="group flex flex-col items-center rounded-[20px] bg-gray-800 px-6 py-12"
          >
            <div className="relative overflow-hidden rounded-[30px] bg-gray-700 p-7 before:absolute before:inset-0 before:bg-primary before:opacity-0 before:transition-opacity group-hover:before:opacity-100">
              <Image
                src={item.icon}
                width={44}
                height={44}
                alt=""
                className="relative z-10"
              />
            </div>
            <strong className="pt-10 pb-4 text-xl leading-8 text-center text-white">
              {item.title}
            </strong>
            <p className="text-sm leading-7 text-center">{item.description}</p>
          </motion.button>
        ))}
      </div>
    </motion.div>
  </Container>
);

export default Features;
