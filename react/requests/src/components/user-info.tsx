import React from "react";
import useUser from "../hooks/use-user";

export default function UserInfo() {
  const { user, userRequestStatus, getUser } = useUser();

  React.useEffect(() => {
    getUser("lua");
  }, [getUser]);

  if (userRequestStatus === "loading") return <div>Carregando usuário...</div>;

  return (
    <ul>
      <li>Name: {user?.name}</li>
      <li>Username: {user?.id}</li>
    </ul>
  );
}
