import { Text } from "@chakra-ui/react";
import React from "react";
import { PokemonType } from "../hooks/usePokemonType";

interface Props {
  types: PokemonType[];
}

const PokeType = ({ types }: Props) => {
  const pokemontypes = types.map((item, index) => (
    <li key={index}>{item.type.name}</li>
  ));
  return <ul>{pokemontypes}</ul>;
};

export default PokeType;
