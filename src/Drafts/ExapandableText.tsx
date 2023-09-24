import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExapandableText = ({ children, maxChars = 100 }: Props) => {
  const [showParagraph, setShowParagraph] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = showParagraph ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}...{" "}
      <button onClick={() => setShowParagraph(!showParagraph)}>
        {showParagraph ? "More" : "Less"}
      </button>
    </p>
  );
};

export default ExapandableText;
