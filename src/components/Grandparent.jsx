import Parent from "./Parent";

function Grandparent() {
  const users = [
    { id: 1, name: "karthi", email: "karthi@gmail.com" },
    { id: 2, name: "logesh", email: "logesh@gmail.com" },
  ];

  const handleUserSelect = (user) => {
    alert(user.name + " selected");
  };

  return <Parent users={users} onUserSelect={handleUserSelect} />;
}

export default Grandparent;