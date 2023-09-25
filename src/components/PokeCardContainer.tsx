import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const PokeCardContainer = ({ children }: Props) => {
  return (
    <Box width="275px" height="450px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default PokeCardContainer;
