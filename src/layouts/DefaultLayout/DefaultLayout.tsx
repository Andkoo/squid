import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll } from "framer-motion";

import { Button, Container } from "~/ui";

const YEAR = new Date().getFullYear();

type TDefaultLayoutProps = {
  children: React.ReactNode;
};

const HEADER_VARIANTS = {
  transparent: {
    paddingBlock: "1.75rem",
    background: "transparent",
    borderBottom: "1px solid transparent",
    backdropFilter: "none",
    transition: "padding 0.15s linear",
  },
  withBg: {
    paddingBlock: "1rem",
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
    <div className="flex flex-col min-h-screen">
      <header
        className="fixed top-0 left-0 right-0 z-50 will-change-auto"
        style={HEADER_VARIANTS[headerVariant]}
      >
        <Container className="flex items-center justify-between">
          <Image
            priority
            src="/images/logo.svg"
            width={132}
            height={34}
            alt="Squid Logo"
          />
          <Button>Download Template</Button>
        </Container>
      </header>

      <main className="flex-1">{children}</main>

      <footer>
        {/* First row */}
        <div className="pt-12 pb-8 bg-gray-800">
          <Container className="flex items-start justify-between">
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
                functional. It should be able to solve the problem
              </p>
            </div>
            {/* End of Left column */}
            {/* Right column */}
            <div>
              <strong className="leading-8 text-white">Sections</strong>
              <div className="grid grid-cols-3 gap-x-[104px]">
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
          <Container className="flex items-center justify-between py-7">
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
    </div>
  );
};

export default DefaultLayout;
