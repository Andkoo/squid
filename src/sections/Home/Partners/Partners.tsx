import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SVG from "react-inlinesvg";

import { Button, Container } from "~/ui";

const PARTNERS = [
  {
    name: "smile",
    website: "/",
    logo: "/images/partners/smile.svg",
  },
  {
    name: "urban",
    website: "/",
    logo: "/images/partners/urban.svg",
  },
  {
    name: "natural",
    website: "/",
    logo: "/images/partners/natural.svg",
  },
  {
    name: "wave",
    website: "/",
    logo: "/images/partners/wave.svg",
  },
  {
    name: "happy",
    website: "/",
    logo: "/images/partners/happy.svg",
  },
  {
    name: "alisa",
    website: "/",
    logo: "/images/partners/alisa.svg",
  },
];

const TITLE_VARIANTS = {
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

const Partners = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{
      margin: "0px 0px -400px 0px",
      once: true,
    }}
    className="pb-72"
  >
    <div className="bg-gray-800 pt-16 md:pt-20 lg:pt-28">
      <Container className="flex flex-col items-center">
        <motion.strong
          variants={TITLE_VARIANTS}
          className="max-w-[578px] pb-14 text-center text-3xl leading-normal text-white sm:pb-[72px] sm:text-5xl sm:leading-[64px]"
        >
          Companies we&apos;ve Worked With Since 2015
        </motion.strong>
        <div className="grid w-full grid-cols-2 gap-[30px] pb-20 sm:pb-24 md:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((item, idx) => (
            <motion.div
              key={`home-partners-item-${item.name}`}
              variants={CARD_VARIANTS}
              transition={{
                delay: 0.2 + idx * 0.1,
              }}
              className="relative flex h-[92px] flex-col rounded-[10px] bg-black"
            >
              <Link href={item.website} className="mx-auto flex-1">
                <SVG
                  src={item.logo}
                  className="svg object-contain text-gray-300 transition-colors hover:text-gray-100"
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={CARD_VARIANTS}
          transition={{
            delay: 0.8,
          }}
          className="relative -mb-48 w-full rounded-[20px] bg-primary px-6 pt-6 pb-8 md:rounded-[40px] md:px-16 md:pt-16 md:pb-20 lg:px-24 lg:pt-24 lg:pb-[72px]"
        >
          <div className="relative z-10 flex max-w-[500px] flex-col items-start">
            <span className="pb-3 text-xl leading-8 text-white">
              Love our Tool?
            </span>
            <strong className="pb-9 text-4xl leading-[1.4] text-white md:text-5xl md:leading-[65px]">
              Feel Free to Join our 15 Days Free Trial
            </strong>
            <Button variant="secondary">Download Template</Button>
          </div>
          <Image
            src="/images/world.svg"
            width={554}
            height={369}
            alt=""
            className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30 lg:opacity-100"
          />
        </motion.div>
      </Container>
    </div>
  </motion.div>
);

export default Partners;
