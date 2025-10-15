import Button from "../../../components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../../components/dialog";
import InputText from "../../../components/input-text";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import type { Photo } from "../../photos/models/photo";
import SelectCheckboxIllustration from "../../../assets/images/select-checkbox.svg?react";
import PhotoImageSelectable from "../../photos/components/photo-image-selectable";

interface AlbumNewDialogProps {
  trigger: React.ReactNode;
}

export default function AlbumNewDialog({ trigger }: AlbumNewDialogProps) {
  const isLoadingPhotos = false;
  const photos: Photo[] = [
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
  ];

  function handleTogglePhoto(selected: boolean, photoId: string) {
    console.log(selected, photoId);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Criar álbum</DialogHeader>
        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um título" />
          <div className="space-y-3">
            <Text as="div" variant="label-small">
              Fotos cadastradas:
            </Text>
            <div className="flex flex-wrap gap-2">
              {!isLoadingPhotos &&
                photos?.length > 0 &&
                photos.map((photo) => (
                  <PhotoImageSelectable
                    key={photo?.id}
                    src={`/images/${photo?.imageId}`}
                    title={photo?.title}
                    imageClassName="w-20 h-20"
                    onSelectImage={(selected) =>
                      handleTogglePhoto(selected, photo.id)
                    }
                    alt={photo?.title}
                  />
                ))}
              {isLoadingPhotos &&
                Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton
                    key={`photos-list-loading-${index}`}
                    className="w-20 h-20 rounded-lg"
                  />
                ))}
            </div>
            {!isLoadingPhotos && photos.length === 0 && (
              <div className="w-full flex flex-col items-center justify-center gap-3">
                <SelectCheckboxIllustration />
                <Text as="p" variant="paragraph-medium" className="text-center">
                  Nenhuma foto disponível para seleção
                </Text>
              </div>
            )}
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button>Criar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
