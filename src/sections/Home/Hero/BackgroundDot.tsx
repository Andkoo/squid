type TBackgroundDotProps = {
  size: number;
  className?: string;
};

const BackgroundDot = ({ size, className }: TBackgroundDotProps) => (
  <div
    className={`"relative aspect-square overflow-hidden rounded-full bg-[#494955] blur-lg before:absolute before:bottom-[-30%] before:right-[-30%] before:aspect-square before:w-[120%] before:rounded-full before:bg-[#141414] before:blur-[32px]"${
      className ? ` ${className}` : ""
    }`}
    style={{ width: size }}
  />
);

export default BackgroundDot;
