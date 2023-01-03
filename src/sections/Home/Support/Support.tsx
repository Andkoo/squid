import { Button, Container } from "~/ui";

import SpinningCircle from "./SpinningCircle";

const Support = () => (
  <Container className="flex flex-col-reverse items-start gap-x-6 gap-y-6 pb-11 lg:flex-row lg:items-center">
    <SpinningCircle />
    <div className="flex flex-col items-start">
      <strong className="max-w-[80%] pb-5 text-3xl leading-normal text-white sm:max-w-[578px] sm:text-5xl sm:leading-[64px]">
        We&apos;re here to guide and help you at all times
      </strong>
      <p className="max-w-[80%] pb-8 text-lg leading-7 sm:max-w-[578px]">
        A good design is not only aesthetically pleasing, but also functional.
        It should be able to solve the problem
      </p>
      <Button>Download</Button>
    </div>
  </Container>
);

export default Support;
