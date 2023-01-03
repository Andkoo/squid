type TButtonVariant = "primary" | "secondary";

type TButtonProps = {
  variant?: TButtonVariant;
  className?: string;
  children: React.ReactNode;
};

const VARIANTS: Record<TButtonVariant, string> = {
  primary:
    "rounded-[5px] bg-primary px-5 sm:px-7 py-3 text-sm text-white transition-shadow hover:shadow-buttonHover",
  secondary:
    "rounded-[5px] bg-black px-7 py-3 text-sm text-white transition-colors hover:bg-gray-700",
};

const Button = ({
  variant = "primary",
  children,
  className,
  ...props
}: TButtonProps) => (
  <button
    {...props}
    className={`${VARIANTS[variant]}${className ? ` ${className}` : ""}`}
  >
    {children}
  </button>
);

export default Button;
