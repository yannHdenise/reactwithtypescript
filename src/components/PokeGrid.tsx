import {
  AbsoluteCenter,
  Button,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import usePokemon from "../hooks/usePokemon";
import PokeCard from "./PokeCard";
import PokeCardSkeleton from "./PokeCardSkeleton";
import PokeCardContainer from "./PokeCardContainer";

const PokeGrid = () => {
  const { pokemons, paginationLinks, error, isLoading, setUrl } = usePokemon();
  const skeletons = [1, 2, 3, 4, 5, 6];

  const isNextDisabled = () => {
    return paginationLinks.next === null;
  };

  const isPrevDisabled = () => {
    return paginationLinks.previous === null;
  };

  const handleOnClick = (newUrl: string) => {};

  return (
    <>
      <AbsoluteCenter padding={8} axis="horizontal">
        <HStack>
          {isPrevDisabled() ? (
            <Text mt={4}>PREVIOUS</Text>
          ) : (
            <Button
              onClick={() => {
                // onClick(paginationLinks.previous);
                setUrl(paginationLinks.previous);
              }}
              variant="link"
              fontSize="lg"
            >
              PREVIOUS
            </Button>
          )}
          <Text mt={3}> | </Text>
          {isNextDisabled() ? (
            <Text mt={4}>NEXT</Text>
          ) : (
            <Button
              onClick={() => {
                // onClick(paginationLinks.next);
                setUrl(paginationLinks.next);
              }}
              variant="link"
              fontSize="lg"
            >
              NEXT
            </Button>
          )}
        </HStack>
      </AbsoluteCenter>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 4 }}
        spacing={2}
        pl={5}
        pt={20}
      >
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
      <AbsoluteCenter padding={8} axis="horizontal">
        <HStack>
          {isPrevDisabled() ? (
            <Text mt={4}>PREVIOUS</Text>
          ) : (
            <Button
              onClick={() => {
                // onClick(paginationLinks.previous);
                setUrl(paginationLinks.previous);
              }}
              variant="link"
              fontSize="lg"
            >
              PREVIOUS
            </Button>
          )}
          <Text mt={3}> | </Text>
          {isNextDisabled() ? (
            <Text mt={4}>NEXT</Text>
          ) : (
            <Button
              onClick={() => {
                // onClick(paginationLinks.next);
                setUrl(paginationLinks.next);
              }}
              variant="link"
              fontSize="lg"
            >
              NEXT
            </Button>
          )}
        </HStack>
      </AbsoluteCenter>
    </>
  );
};

export default PokeGrid;
