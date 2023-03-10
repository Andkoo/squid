import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SVG from "react-inlinesvg";
import { v4 as uuidv4 } from "uuid";

import { Button, Container } from "~/ui";
import { BackgroundDot } from "~/components";

import ArticleSkeleton from "./ArticleSkeleton";

const CHART_BARS = [
  ["4.8rem", "1.5rem", "4rem", "0rem", "1rem", "4.8rem"],
  ["4.8rem", "2rem", "0rem", "2rem", "4.8rem"],
  ["4.8rem", "1.5rem", "0rem", "4.8rem"],
  ["4.8rem", "4rem", "1rem", "2rem", "0rem", "4rem", "4.8rem"],
  ["4.8rem", "0rem", "4.8rem"],
  ["4.8rem", "1rem", "0rem", "4rem", "1rem", "4.8rem", "0rem", "4.8rem"],
];

const USER_POSTS = [
  {
    avatar: "/images/user-1.png",
    uuid: uuidv4(),
  },
  {
    avatar: "/images/user-2.png",
    uuid: uuidv4(),
  },
  {
    avatar: "/images/user-3.png",
    uuid: uuidv4(),
  },
  {
    avatar: "/images/user-4.png",
    uuid: uuidv4(),
  },
];

const USER_POST_SWITCH_TIMEOUT = 5 * 1000;

type TUserPost = typeof USER_POSTS[number];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
  });
  const textsScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const textsOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [userPosts, setUserPosts] = useState<TUserPost[]>(USER_POSTS);

  useEffect(() => {
    let interval: NodeJS.Timer | null = null;

    interval = setInterval(() => {
      setUserPosts((prev) => {
        const newPosts = [...prev];
        const lastPost =
          newPosts.pop() || (USER_POSTS[USER_POSTS.length - 1] as TUserPost);

        // Change UUID to make the post "unique" so it
        // will trigger enter animation
        lastPost.uuid = uuidv4();

        return [lastPost, ...newPosts];
      });
    }, USER_POST_SWITCH_TIMEOUT);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="stripes-bg relative flex w-screen flex-col items-center overflow-x-hidden pt-28 sm:pt-36 lg:pt-44"
    >
      {/* BG dots */}
      <BackgroundDot
        size={140}
        className="absolute left-[7vw] top-[50vh] -translate-y-full"
      />
      <BackgroundDot
        size={64}
        className="absolute left-1/2 top-[70px] -translate-x-full"
      />
      <BackgroundDot
        size={96}
        className="absolute right-[7vw] top-[calc(50vh-150px)] -translate-y-full"
      />
      {/* End of BG dots */}

      {/* Texts */}
      <Container>
        <motion.div
          style={{
            scale: textsScale,
            opacity: textsOpacity,
          }}
          className="flex origin-bottom flex-col items-center pb-12 will-change-transform md:pb-16"
        >
          <h1 className="relative pb-[18px] text-center text-3xl font-semibold leading-normal text-white after:absolute after:top-1/2 after:left-1/2 after:-z-10 after:aspect-square after:w-[70%] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-heroBackground sm:max-w-[576px] sm:text-5xl sm:leading-[64px] lg:max-w-[752px] lg:text-[64px] lg:leading-[80px]">
            Beautiful Landing Page Design for You
          </h1>
          <h2 className="max-w-[90%] pb-9 text-center text-sm leading-6 text-gray sm:max-w-[576px] sm:text-lg sm:leading-7">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem.
          </h2>
          <Button>Download Template</Button>
        </motion.div>
      </Container>
      {/* End of Texts */}

      {/* Mockup */}
      <Container className="relative z-10 mb-[-176px] sm:mb-[-20vw]">
        <div className="mx-auto grid w-full max-w-[864px] grid-cols-1 gap-y-6 gap-x-6 rounded-[28px] bg-gray-900 px-6 py-6 lg:grid-cols-3 lg:px-14 lg:py-11">
          {/* First column */}
          <div className="flex flex-col items-center rounded-[20px] bg-gray-700 p-6">
            <SVG src="/images/logo-compact.svg" className="svg text-gray-500" />
            <div className="mt-5 mb-8 h-[1px] w-full bg-gray-500" />
            {/* Articles */}
            <div className="flex flex-col gap-y-6 pb-11">
              {[...Array(5)].map((_, idx) => (
                <motion.div
                  key={`home-mockup-column-0-item-${idx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <ArticleSkeleton centered />
                </motion.div>
              ))}
            </div>
            {/* End of Articles */}
            {/* Author */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col items-center pb-1"
            >
              <Image src="/images/user-1.png" width={42} height={42} alt="" />
              <div className="flex flex-1 flex-wrap justify-center gap-x-2 gap-y-1 pt-5">
                <div className="h-[6px] w-[56px] flex-shrink-0 rounded-full bg-gray-500" />
                <div className="h-[6px] w-[42px] flex-shrink-0 rounded-full bg-gray-500" />
                <div className="w-full" />
                <div className="h-[6px] w-[62px] flex-shrink-0 rounded-full bg-gray-500" />
              </div>
            </motion.div>
            {/* End of Author */}
          </div>
          {/* End of First column */}

          {/* Second column */}
          <div className="flex flex-col gap-y-7">
            {/* First box */}
            <div className="flex-1 rounded-[20px] bg-gray-700 py-6 px-5">
              <ArticleSkeleton reverse />
              <div className="flex rotate-90 justify-center py-6">
                <motion.svg viewBox="0 0 100 100" className="h-28 w-28">
                  <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0.48%" stopColor="#FF9898" />
                    <stop offset="100%" stopColor="#8054FF" />
                  </linearGradient>
                  <circle
                    r={19}
                    cx={50}
                    cy={50}
                    strokeWidth={8}
                    fill="none"
                    stroke="#313139"
                  />
                  <motion.circle
                    r={46}
                    cx={50}
                    cy={50}
                    strokeWidth={8}
                    fill="none"
                    stroke="url(#linearColors)"
                    strokeLinecap="round"
                    animate={{
                      pathLength: [0.75, 1, 0.1, 0.2, 0.4, 0.75],
                    }}
                    transition={{
                      pathLength: {
                        repeat: Infinity,
                        duration: 10,
                      },
                    }}
                  />
                </motion.svg>
              </div>
            </div>
            {/* End of First box */}
            {/* Second box */}
            <div className="flex-1 rounded-[20px] bg-gray-700 py-6 px-5">
              <ArticleSkeleton reverse />
              <div className="mt-5 mb-8 h-[1px] bg-gray-500" />
              {/* Graph */}
              <div className="flex gap-x-3">
                {CHART_BARS.map((item, idx) => (
                  <motion.div
                    key={`home-mockup-column-1-chartItem-${idx}`}
                    animate={{ paddingTop: item }}
                    transition={{
                      repeat: Infinity,
                      duration: item.length * 2,
                      delay: idx * 0.3,
                    }}
                    className="flex h-24 w-5 flex-col justify-end rounded-full bg-gray-500"
                  >
                    <div className="flex-1 rounded-full bg-mockupChartBar" />
                  </motion.div>
                ))}
              </div>
              {/* End of Graph */}
            </div>
            {/* End of Second box */}
          </div>
          {/* End of Second column */}

          {/* Third column */}
          <div className="flex flex-col gap-y-7">
            <div className="rounded-[20px] bg-gray-700 py-6 px-5">
              <ArticleSkeleton reverse />
              <div className="relative pt-4 after:absolute after:inset-0 after:bg-gradient-to-t after:from-gray-700 after:to-transparent">
                {userPosts.map((item) => (
                  <motion.div
                    key={`home-mockup-column-2-userPost-${item.uuid}`}
                    layoutId={`userPost-${item.uuid}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      opacity: {
                        ease: "linear",
                      },
                      y: {
                        ease: "linear",
                      },
                    }}
                    className="flex items-center gap-x-4 border-b-[1px] border-gray-200 pb-3 pt-2"
                  >
                    <Image
                      src={item.avatar}
                      width={42}
                      height={42}
                      alt=""
                      className="h-[42px] w-[42px]"
                    />
                    <ArticleSkeleton withoutImage />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="hidden flex-1 rounded-[20px] bg-gray-700 py-6 px-5 lg:block" />
          </div>
          {/* End of Third column */}
        </div>
      </Container>
      {/* End of Mockup */}

      {/* BG gradient */}
      <div>
        <Image
          src="/images/hero-bg.svg"
          width={1920}
          height={600}
          alt=""
          className="w-[max(100vw,1024px)] max-w-none"
        />
      </div>
      {/* End of BG gradient */}
    </div>
  );
};

export default Hero;
