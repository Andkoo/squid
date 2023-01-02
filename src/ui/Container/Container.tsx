type TContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => (
  <div
    className={`mx-auto max-w-[1170px] px-[30px]${
      className ? ` ${className}` : ""
    }`}
  >
    {children}
  </div>
);

export default Container;
