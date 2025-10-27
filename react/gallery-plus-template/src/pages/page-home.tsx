import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import useAlbums from "../contexts/albums/hooks/use-albums";
import PhotosList from "../contexts/photos/components/photos-list";
import usePhotos from "../contexts/photos/hooks/use-photos";

export default function PageHome() {
  const { albums, isLoadingAlbums } = useAlbums();
  const { photos, isLoadingPhotos } = usePhotos();

  return (
    <Container>
      <AlbumsFilter
        className="mb-9"
        albums={albums}
        loading={isLoadingAlbums}
      />
      <PhotosList photos={photos} loading={isLoadingPhotos} />
    </Container>
  );
}
