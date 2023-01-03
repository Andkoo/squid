type TContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className, ...props }: TContainerProps) => (
  <div
    {...props}
    className={`mx-auto w-full max-w-[1170px] px-[30px]${
      className ? ` ${className}` : ""
    }`}
  >
    {children}
  </div>
);

export default Container;
