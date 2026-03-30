import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';

type AvatarSize = 'xs' | 'sm';

type AvatarImageProps = Omit<ImageProps, 'height' | 'width'> & {
  size?: AvatarSize;
};

const avatarSize = {
  xs: 'h-5 w-5',
  sm: 'h-9 w-9',
};

export const AvatarImage = ({
  src,
  alt,
  size = 'xs',
  ...rest
}: AvatarImageProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full border-blue-200 border-[1px]',
        avatarSize[size]
      )}
    >
      <Image {...rest} src={src} alt={alt} fill />;
    </div>
  );
};
