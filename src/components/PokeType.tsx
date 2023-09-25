import { HStack, Text } from "@chakra-ui/react";
import { PokemonType } from "../hooks/usePokemonType";
import TypeWithIcon from "./TypeWithIcon";

interface Props {
  types: PokemonType[];
}

const PokeType = ({ types }: Props) => {
  return (
    <>
      {types.map((item, index) => (
        <HStack w="full" key={index} justifyContent="space-between">
          <Text fontSize="sm">
            {index === 0 ? "Primary Type: " : "Secondary Type: "}
          </Text>
          <TypeWithIcon type={item.type.name}></TypeWithIcon>
        </HStack>
      ))}
    </>
  );
};

export default PokeType;
