type TContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className, ...props }: TContainerProps) => (
  <div
    {...props}
    className={`mx-auto w-[1170px] max-w-full px-[20px] sm:px-[30px]${
      className ? ` ${className}` : ""
    }`}
  >
    {children}
  </div>
);

export default Container;
