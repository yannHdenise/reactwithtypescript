import { SimpleGrid, Text } from "@chakra-ui/react";
import usePokemon from "../hooks/usePokemon";
import PokeCard from "./PokeCard";
import PokeCardSkeleton from "./PokeCardSkeleton";
import PokeCardContainer from "./PokeCardContainer";

const PokeGrid = () => {
  const { pokemons, error, isLoading } = usePokemon();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <PokeCardContainer key={skeleton}>
              <PokeCardSkeleton />
            </PokeCardContainer>
          ))}
        {pokemons.map((pokemon) => (
          <PokeCardContainer key={pokemon.name}>
            <PokeCard pokemon={pokemon}></PokeCard>
          </PokeCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default PokeGrid;
