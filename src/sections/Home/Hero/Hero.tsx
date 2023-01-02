import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SVG from "react-inlinesvg";
import { v4 as uuidv4 } from "uuid";

import { Button, Container } from "~/ui";

import ArticleSkeleton from "./ArticleSkeleton";

const CHART_BARS = [
  ["38%", "15%", "30%", "0%", "10%", "38%"],
  ["38%", "25%", "0%", "25%", "38%"],
  ["38%", "15%", "0%", "38%"],
  ["38%", "30%", "10%", "25%", "0%", "30%", "38%"],
  ["38%", "0%", "38%"],
  ["38%", "20%", "0%", "30%", "10%", "38%", "0%", "38%"],
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
        const lastPost = newPosts.pop() || (USER_POSTS[0] as TUserPost);

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
    <div ref={heroRef} className="flex flex-col items-center stripes-bg pt-44 ">
      {/* Texts */}
      <Container>
        <motion.div
          style={{
            scale: textsScale,
            opacity: textsOpacity,
          }}
          className="flex flex-col items-center pb-16 origin-bottom will-change-transform"
        >
          <h1 className="relative max-w-[752px] pb-[18px] text-center text-[64px] font-semibold leading-[80px] text-white after:absolute after:top-1/2 after:left-1/2 after:-z-10 after:aspect-square after:w-[70%] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-heroBackground">
            Beautiful Landing Page Design for You
          </h1>
          <h2 className="max-w-[576px] pb-9 text-center text-lg leading-7 text-gray">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </h2>
          <Button>Download Template</Button>
        </motion.div>
      </Container>
      {/* End of Texts */}

      {/* Mockup */}
      <Container className="relative z-10 mb-[-20vw]">
        <div className="grid w-full max-w-[864px] grid-cols-3 gap-x-7 rounded-[28px] bg-gray-900 px-14 py-11">
          {/* First column */}
          <div className="flex flex-col items-center rounded-[20px] bg-gray-700 p-6">
            <SVG src="/images/logo-compact.svg" className="text-gray-500 svg" />
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
                  <ArticleSkeleton />
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
              <div className="flex flex-wrap justify-center flex-1 pt-5 gap-x-2 gap-y-1">
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
              <div className="flex justify-center py-6 rotate-90">
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
                    className="flex flex-col justify-end flex-1 h-24 bg-gray-500 rounded-full"
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
            <div className="flex-1 rounded-[20px] bg-gray-700 py-6 px-5" />
          </div>
          {/* End of Third column */}
        </div>
      </Container>
      {/* End of Mockup */}

      {/* BG gradient */}
      <div>
        <Image src="/images/hero-bg.svg" width={1920} height={600} alt="" />
      </div>
      {/* End of BG gradient */}
    </div>
  );
};

export default Hero;
