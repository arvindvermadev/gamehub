import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();
  if (error) return null;
  return (
    <div>
      {isLoading && <Spinner></Spinner>}
      <List>
        {data.map((gen) => (
          <ListItem key={gen.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(gen.image_background)}
              ></Image>
              <Text fontSize="lg">{gen.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
