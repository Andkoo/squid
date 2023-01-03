type TBackgroundDotProps = {
  size: number;
  className?: string;
};

const BackgroundDot = ({ size, className }: TBackgroundDotProps) => (
  <div
    className={`"relative aspect-square overflow-hidden rounded-full bg-[#494955] blur-md before:absolute before:bottom-[-22%] before:right-[-22%] before:aspect-square before:w-full before:rounded-full before:bg-[#2D2D32] before:blur-lg${
      className ? ` ${className}` : ""
    }`}
    style={{ width: size }}
  />
);

export default BackgroundDot;
