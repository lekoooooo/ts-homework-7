import { users } from "../../data/users";
import UserCard from "../UserCard/UserCard";
import type { Users } from "../../types";

const UserList = () => {
  return (
    <div className="gap-4 grid">
      {users.map((user: Users) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UserList;
