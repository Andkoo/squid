import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll } from "framer-motion";
import { SocialIcon } from "react-social-icons";

import { Button, Container } from "~/ui";

const YEAR = new Date().getFullYear();

type TDefaultLayoutProps = {
  children: React.ReactNode;
};

const HEADER_VARIANTS = {
  transparent: {
    background: "transparent",
    borderBottom: "1px solid transparent",
    backdropFilter: "none",
    transition: "padding 0.15s linear",
  },
  withBg: {
    background: "hsla(0, 0%, 0%, 0.8)",
    borderBottom: "1px solid #313139",
    backdropFilter: "blur(8px)",
    transition: "padding 0.15s linear",
  },
};

const HEADER_VARIANT_BREAKPOINT = 0;

type THeaderVariant = keyof typeof HEADER_VARIANTS;

const DefaultLayout = ({ children }: TDefaultLayoutProps) => {
  const { scrollY } = useScroll();

  const [headerVariant, setHeaderVariant] =
    useState<THeaderVariant>("transparent");

  const handleScroll = (val: number) => {
    if (headerVariant === "transparent" && val > HEADER_VARIANT_BREAKPOINT) {
      setHeaderVariant("withBg");
    } else if (headerVariant === "withBg" && val <= HEADER_VARIANT_BREAKPOINT) {
      setHeaderVariant("transparent");
    }
  };

  useEffect(() => {
    handleScroll(scrollY.get());

    return scrollY.on("change", handleScroll);
  }, [headerVariant]);

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={
          headerVariant === "transparent"
            ? "fixed top-0 left-0 right-0 z-50 py-5 will-change-auto sm:py-7"
            : "fixed top-0 left-0 right-0 z-50 py-5 will-change-auto"
        }
        style={HEADER_VARIANTS[headerVariant]}
      >
        <Container className="flex items-center justify-between">
          <Image
            src="/images/logo.svg"
            width={132}
            height={34}
            alt="Squid Logo"
            className="w-[80px] sm:w-[96px] md:w-[132px]"
          />
          <Button>Download Template</Button>
        </Container>
      </header>

      <main className="flex-1">{children}</main>

      <footer>
        {/* First row */}
        <div className="bg-gray-800 pt-12 pb-8">
          <Container className="flex flex-col items-start justify-between gap-y-12 md:flex-row">
            {/* Left column */}
            <div>
              <Image
                src="/images/logo-compact.svg"
                width={56}
                height={46}
                alt="Squid Logo"
              />
              <p className="max-w-[300px] pt-6 text-sm text-gray">
                A good design is not only aesthetically pleasing, but also
                functional. It should be able to solve the problem.
              </p>
            </div>
            {/* End of Left column */}
            {/* Right column */}
            <div>
              <strong className="leading-8 text-white">Sections</strong>
              <div className="grid grid-cols-1 gap-x-[104px] gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={`footer-section-${idx}`}
                    className="flex flex-col text-sm leading-[38px] text-gray"
                  >
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                    <Link href="/" className="hover:underline">
                      Section One
                    </Link>
                    <Link href="/" className="hover:underline">
                      Section Two
                    </Link>
                    <Link href="/" className="hover:underline">
                      Section Three
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* End of Right column */}
          </Container>
        </div>
        {/* End of First row */}
        {/* Second row */}
        <div>
          <Container className="flex flex-col items-center justify-between gap-y-6 py-7 sm:flex-row">
            <div className="text-sm leading-7 text-gray">
              All Rights Reservd Inkyy.com {YEAR}
            </div>
            <div className="flex gap-x-4">
              {[
                "https://twitter.com",
                "https://linkedin.com",
                "https://discord.com",
              ].map((item) => (
                <Link
                  key={`footer-socialIcon-${item}`}
                  href={item}
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-2xl 
                bg-gray-800 transition-colors hover:bg-gray-500"
                >
                  <Image
                    src={`/icons/${item.split(/https:\/\/|.com/g)[1]}.svg`}
                    width={18}
                    height={18}
                    alt=""
                  />
                </Link>
              ))}
            </div>
          </Container>
        </div>
        {/* End of Second row */}
      </footer>

      <div className="fixed bottom-0 right-0 z-50 flex justify-end gap-x-2 p-4">
        <SocialIcon
          url="https://github.com/Andkoo/squid"
          target="_blank"
          bgColor="hsl(0, 0%, 80%)"
          fgColor="hsl(0, 0%, 40%)"
          className="!h-8 !w-8 opacity-50 transition-opacity hover:opacity-100"
        />
        <SocialIcon
          url="mailto:andrejmikulicka95@gmail.com"
          target="_blank"
          bgColor="hsl(0, 0%, 80%)"
          fgColor="hsl(0, 0%, 40%)"
          className="!h-8 !w-8 opacity-50 transition-opacity hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default DefaultLayout;
