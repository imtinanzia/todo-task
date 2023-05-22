import React from "react";

const Input = ({
  ...intrinsicProps
}: React.ComponentProps<"input">): JSX.Element => {
  return <input {...intrinsicProps} />;
};

export default Input;
