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
    <div className="bg-gray-800 pt-28">
      <Container className="flex flex-col items-center">
        <motion.strong
          variants={TITLE_VARIANTS}
          className="max-w-[578px] pb-[72px] text-center text-5xl leading-[64px] text-white"
        >
          Companies we&apos;ve Worked With Since 2015
        </motion.strong>
        <div className="grid w-full grid-cols-6 gap-[30px] pb-24">
          {PARTNERS.map((item, idx) => (
            <motion.div
              key={`home-partners-item-${item.name}`}
              variants={CARD_VARIANTS}
              transition={{
                delay: 0.2 + idx * 0.1,
              }}
              className="relative flex h-[92px] flex-col rounded-[10px] bg-black"
            >
              <Link href={item.website} className="flex-1">
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
          className="relative -mb-48 w-full rounded-[40px] bg-primary px-24 pt-24 pb-[72px]"
        >
          <div className="flex max-w-[500px] flex-col items-start">
            <span className="pb-3 text-xl leading-8 text-white">
              Love our Tool?
            </span>
            <strong className="pb-9 text-5xl leading-[65px] text-white">
              Fell Free to Join our 15 Days Free Trial
            </strong>
            <Button variant="secondary">Download Template</Button>
          </div>
          <Image
            src="/images/world.svg"
            width={554}
            height={369}
            alt=""
            className="absolute right-0 top-1/2 -translate-y-1/2"
          />
        </motion.div>
      </Container>
    </div>
  </motion.div>
);

export default Partners;
