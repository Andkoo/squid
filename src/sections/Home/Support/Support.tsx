import { Button, Container } from "~/ui";

import SpinningCircle from "./SpinningCircle";

const Support = () => (
  <Container className="flex items-center gap-x-6">
    <div>
      <SpinningCircle />
    </div>
    <div className="flex flex-col items-start">
      <strong className="pb-5 text-5xl leading-[64px] text-white">
        We&apos;re here to guide and help you at all times
      </strong>
      <p className="pb-8 text-lg leading-7">
        A good design is not only aesthetically pleasing, but also functional.
        It should be able to solve the problem
      </p>
      <Button>Download</Button>
    </div>
  </Container>
);

export default Support;
