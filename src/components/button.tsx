import React, { useMemo } from "react";

type Variant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant: Variant;
  label: string;
  icon?: JSX.Element;
}

const generateButtonClasses = (variant: Variant): string => `
gap-2
h-full
flex
${
  variant === "primary"
    ? "text-red-500 border-red-500 hover:bg-red-500"
    : variant === "secondary"
    ? "border-green-500 text-green-500 hover:bg-green-500"
    : "border-indigo-500 text-indigo-500 hover:bg-indigo-500"
}
border-2 
p-2
rounded-lg
hover:text-white
`;

const Button = ({
  variant,
  label,
  icon,
  type = "button",
  className,
  ...intrinsicProps
}: ButtonProps): JSX.Element => {
  const classes = useMemo(
    () => ({
      base: generateButtonClasses(variant),
    }),
    [variant]
  );

  return (
    <button
      className={`${classes.base} ${className}`}
      type={type}
      {...intrinsicProps}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Button;
