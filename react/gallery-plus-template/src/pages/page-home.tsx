import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        className="mb-9"
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
      <PhotosList
        photos={[
          {
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
          },
          {
            id: "342425",
            title: "photo example 2",
            imageId: "portrait-tower.png",
            albums: [
              {
                id: "123455",
                title: "album 1",
              },
              {
                id: "56431",
                title: "album 2",
              },
              {
                id: "32467",
                title: "album 3",
              },
            ],
          },
        ]}
      />
    </Container>
  );
}
