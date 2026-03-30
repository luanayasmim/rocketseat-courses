type AvatarDescriptionProps = {
  children: React.ReactNode;
};

export const AvatarDescription = ({ children }: AvatarDescriptionProps) => {
  return <div className="text-gray-300 text-body-xs">{children}</div>;
};
