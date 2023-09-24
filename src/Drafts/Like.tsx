import { on } from "events";
import { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggle = () => {
    setIsLiked(!isLiked);
    onClick();
  };

  if (isLiked) return <BsHeartFill color="red" onClick={toggle} />;
  else return <BsHeart onClick={toggle} />;
};

export default Like;
