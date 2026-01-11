import Child from "./Child";

function Parent({ users, onUserSelect }) {
  const filteredUsers = users.filter(u => u.name.length > 0);

  return (
    <div>
      {filteredUsers.map(user => (
        <Child key={user.id} user={user} onUserSelect={onUserSelect} />
      ))}
    </div>
  );
}

export default Parent;