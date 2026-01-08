function UserStatus({ user }) {
    if (user === null) {
      return <h3>Loading user…</h3>;
    }
  
    return (
      <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px" }}>
        <p><strong>Name:</strong> {user?.name ?? "Guest User"}</p>
        <p><strong>Email:</strong> {user?.email ?? "No email provided"}</p>
  
        {user?.isActive && <p style={{ color: "green" }}>Active User</p>}
      </div>
    );
  }
  
  export default UserStatus;  