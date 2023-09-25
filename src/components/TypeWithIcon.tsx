import React from "react";
import { PokemonType } from "../hooks/usePokemonType";
import { CgPokemon } from "react-icons/cg";
import { BsFire, BsBugFill, BsMoonStarsFill } from "react-icons/bs";
import {
  GiWaterDrop,
  GiElectric,
  GiSnowflake2,
  GiHighGrass,
  GiBrassKnuckles,
  GiPoisonBottle,
  GiUndergroundCave,
  GiEvilWings,
  GiCrystalBall,
  GiStonePile,
  GiGhost,
  GiDragonHead,
  GiSteelClaws,
  GiFairyWings,
} from "react-icons/gi";
import { IconType } from "react-icons";
import { HStack, Icon, Text } from "@chakra-ui/react";

interface Props {
  type: string;
}

const TypeWithIcon = ({ type }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    normal: CgPokemon,
    fire: BsFire,
    water: GiWaterDrop,
    grass: GiHighGrass,
    electric: GiElectric,
    ice: GiSnowflake2,
    fighting: GiBrassKnuckles,
    poison: GiPoisonBottle,
    ground: GiUndergroundCave,
    flying: GiEvilWings,
    psychic: GiCrystalBall,
    bug: BsBugFill,
    rock: GiStonePile,
    ghost: GiGhost,
    dragon: GiDragonHead,
    dark: BsMoonStarsFill,
    steel: GiSteelClaws,
    fairy: GiFairyWings,
  };
  return (
    <HStack>
      <Text>{type}</Text>
      <Icon mt={-4} color="gray.500" as={iconMap[type]}></Icon>
    </HStack>
  );
};

export default TypeWithIcon;
