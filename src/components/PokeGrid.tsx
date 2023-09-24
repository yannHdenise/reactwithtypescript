import { SimpleGrid, Text } from "@chakra-ui/react";
import usePokemon from "../hooks/usePokemon";
import PokeCard from "./PokeCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const PokeGrid = () => {
  const { pokemons, error, isLoading } = usePokemon();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {pokemons.map((pokemon) => (
          <GameCardContainer key={pokemon.name}>
            <PokeCard pokemon={pokemon}></PokeCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default PokeGrid;
