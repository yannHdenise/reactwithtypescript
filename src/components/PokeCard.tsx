import { Pokemon } from "../hooks/usePokemon";
import { Card, CardBody, VStack, Heading, Image } from "@chakra-ui/react";
import pokeImage from "../assets/pokeball.jpg";
import PokeType from "./PokeType";
import usePokemonType from "../hooks/usePokemonType";
import usePokemonCharacteristics from "../hooks/usePokemonCharacteristics.";
import PokeCharacteristics from "./PokeCharacteristics";

interface Props {
  pokemon: Pokemon;
}
const GameCard = ({ pokemon }: Props) => {
  const { pokemonTypes, errorOfType, isLoadingOfType } = usePokemonType(
    pokemon.url
  );
  const { pokemonDetail, errorOfDetail, isLoadingOfDetail } =
    usePokemonCharacteristics(pokemon.url);

  return (
    <Card>
      <Image src={pokeImage}></Image>
      <CardBody>
        <Heading fontSize="2xl">{pokemon.name}</Heading>
        <VStack justifyContent="space-between">
          <PokeType types={pokemonTypes} />
          <PokeCharacteristics detail={pokemonDetail} />
        </VStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;