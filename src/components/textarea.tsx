import React from "react";

const Textarea = ({
  ...intrinsicProps
}: React.ComponentProps<"textarea">): JSX.Element => {
  return <textarea {...intrinsicProps} />;
};

export default Textarea;
