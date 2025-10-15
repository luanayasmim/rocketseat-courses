import { useParams } from "react-router";
import Container from "../components/container";
import Text from "../components/text";
import Skeleton from "../components/skeleton";
import PhotosNavigator from "../contexts/photos/components/photos-navigator";
import ImagePreview from "../components/image-preview";
import Button from "../components/button";
import AlbumsListSelectable from "../contexts/albums/components/albums-list-selectable";

export default function PagePhotoDetails() {
  const { id } = useParams();
  const isLoadingPhoto = false;
  const photo = {
    id: "256718",
    title: "photo example",
    imageId: "portrait-tower.png",
    albums: [
      {
        id: "83920",
        title: "album 1",
      },
      {
        id: "673728",
        title: "album 2",
      },
      {
        id: "9302",
        title: "album 3",
      },
    ],
  };

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text as="h2" variant="heading-large">
            {photo?.title}
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator loading={isLoadingPhoto} />
      </header>
      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              alt={photo?.title}
              title={photo?.title}
              imageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}
          {!isLoadingPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="w-20 h-10" />
          )}
        </div>
        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-7">
            Álbuns
          </Text>

          <AlbumsListSelectable
            loading={isLoadingPhoto}
            photo={photo}
            albums={[
              {
                id: "83920",
                title: "album 1",
              },
              {
                id: "673728",
                title: "album 2",
              },
              {
                id: "9302",
                title: "album 3",
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
