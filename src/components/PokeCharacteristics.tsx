import React from "react";
import { PokemonDetail } from "../hooks/usePokemonCharacteristics.";
import { Text } from "@chakra-ui/react";

interface Props {
  detail: PokemonDetail[];
}

const PokeCharacteristics = ({ detail }: Props) => {
  const pokeDetail = detail.map((item) => item.description);

  return <Text>{pokeDetail[7]}</Text>;
};

export default PokeCharacteristics;
