import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PokeGrid from "./components/PokeGrid";
import { useState } from "react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" " main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px, 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <PokeGrid></PokeGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
