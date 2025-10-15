import Text from "../components/text";
import Icon from "../components/icon";
import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import InputText from "../components/input-text";
import InputCheckbox from "../components/input-checkbox";
import Card from "../components/card";
import Skeleton from "../components/skeleton";
import Container from "../components/container";
import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import ClipBoardIcon from "../assets/icons/clipboard.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import XIcon from "../assets/icons/x.svg?react";

export default function PageComponents() {
  return (
    <Container>
      <div>
        <div className="flex flex-col gap-5">
          <Text as="p" variant={"body-sm-bold"} className="text-pink-base">
            Hello World!
          </Text>
          <Text as="p" variant={"body-md"} className="text-gray-400">
            Hello World!
          </Text>
          <Text as="p" variant={"body-md-bold"} className="text-green-dark">
            Hello World!
          </Text>
          <Text>Levar o dog para passear</Text>
        </div>
        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-pink-base" />
          <Icon svg={CheckIcon} className="fill-pink-base" />
          <Icon svg={PencilIcon} className="fill-pink-base" />
          <Icon svg={ClipBoardIcon} className="fill-pink-base" />
          <Icon svg={PlusIcon} className="fill-pink-base" />
          <Icon svg={SpinnerIcon} animate />
          <Icon svg={XIcon} className="fill-pink-base" />
        </div>
        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>
        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
        </div>
        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} loading />
          <ButtonIcon icon={TrashIcon} variant={"secondary"} />
          <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
        </div>
        <div>
          <InputText />
        </div>
        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>
        <div>
          <Card size="md">Hello World</Card>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </Container>
  );
}
