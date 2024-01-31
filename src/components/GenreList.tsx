import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
              <Button
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(gen)}
              >
                {gen.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
