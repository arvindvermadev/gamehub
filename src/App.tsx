import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Show,
  useStatStyles,
} from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";

function App() {
  const [genre, setGenre] = useState<Genre | null>(null);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main" `,
          lg: `"nav nav" "aside main" `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX="10px">
            <GenreList
              selectedGenre={genre}
              onSelectGenre={(genre) => setGenre(genre)}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector></PlatformSelector>
          <GameGrid selectedGenre={genre}></GameGrid>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
