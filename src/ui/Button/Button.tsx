type TButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: TButtonProps) => (
  <button className="rounded-[5px] bg-primary px-7 py-3 text-white transition-shadow hover:shadow-buttonHover">
    {children}
  </button>
);

export default Button;
