import useUsers from "../hooks/use-users";

export default function UsersList() {
  const { users, isLoadingUsers } = useUsers();

  if (isLoadingUsers) return <div>Loading all users...</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          Name: {user.name} | Username: {user.id}
        </li>
      ))}
    </ul>
  );
}
