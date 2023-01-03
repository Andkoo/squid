type TButtonVariant = "primary" | "secondary";

type TButtonProps = {
  variant?: TButtonVariant;
  children: React.ReactNode;
};

const VARIANTS: Record<TButtonVariant, string> = {
  primary:
    "rounded-[5px] bg-primary px-7 py-3 text-white transition-shadow hover:shadow-buttonHover",
  secondary:
    "rounded-[5px] bg-black px-7 py-3 text-white transition-shadow hover:bg-gray-700",
};

const Button = ({ variant = "primary", children, ...props }: TButtonProps) => (
  <button {...props} className={VARIANTS[variant]}>
    {children}
  </button>
);

export default Button;
