function RenderingPlayground() {
    const name = "Karthikeyan";
    const age = 21;
  
    const user = {
      name: "Karthikeyan",
      city: "Pudukkottai",
    };
  
    const skills = ["HTML", "CSS", "JS", "React"];
  
    const products = [
      { id: 1, name: "Laptop", price: 55000 },
      { id: 2, name: "Mobile", price: 25000 },
      { id: 3, name: "Headphones", price: 3000 },
    ];
  
    return (
      <div style={{ padding: "20px" }}>
        <h2>Rendering Playground</h2>
  
        {/* Primitive */}
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
  
        <hr />
  
        {/* Object */}
        <h3>User Object</h3>
        <p>Name: {user.name}</p>
        <p>City: {user.city}</p>
  
        <hr />
  
        {/* Array of Strings */}
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
  
        <hr />
  
        {/* Array of Objects */}
        <h3>Products</h3>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default RenderingPlayground;  