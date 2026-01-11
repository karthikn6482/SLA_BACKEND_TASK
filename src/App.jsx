// import ProfileCardFn from "./components/ProfileCardFn";
// import ProfileCardClass from "./components/ProfileCardClass";

// import RenderingPlayground from "./components/RenderingPlayground";

// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";

// import { useState } from "react";
// import UserStatus from "./components/UserStatus";

// function App() {
  
//   // return (
//   //   // <div style={{ display: "flex", justifyContent: "center" }}>

//   //   <div>

//   //     {/* <ProfileCardFn />
//   //     <ProfileCardClass /> */}

//   //     {/* <RenderingPlayground /> */}
      
//   //         <nav style={{ padding: "15px", background: "#eee", display: "flex", justifyContent: "center" }}>
//   //           <Link to="/" style={{ margin: "10px" }}>Home</Link>
//   //           <Link to="/about" style={{ margin: "10px" }}>About</Link>
//   //           <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
//   //         </nav>

//   //         <Routes>
//   //           <Route path="/" element={<Home />} />
//   //           <Route path="/about" element={<About />} />
//   //           <Route path="/contact" element={<Contact />} />
//   //         </Routes>

//   //   </div>
//   // );

//   const [user, setUser] = useState(null);

//   const toggleUser = () => {
//     if (user === null) {
//       setUser({
//         name: "Karthikeyan",
//         email: "karthi@gmail.com",
//         isActive: true,
//       });
//     } else {

//       setUser(null);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <button onClick={toggleUser}>
//         {user === null ? "Load User" : "Clear User"}
//       </button>

//       <UserStatus user={user} />
//     </div>
//   );

// }

// export default App;

//props

import { useState } from "react";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Grandparent from "./components/Grandparent";
import UserForm from "./components/UserForm";

function App() {
  const [count, setCount] = useState(0);

  const handleFormSubmit = (data) => {
    console.log("Submitted:", data);
  };

  return (
    <div>
      <h2>Task 1</h2>
      <UserCard name="John" age={25} city="Chennai" isAdmin={true} />

      <h2>Task 2</h2>
      <Button label="Click Me" onClick={() => alert("Clicked")} />

      <h2>Task 3</h2>
      <Counter
        count={count}
        increment={() => setCount(count + 1)}
        decrement={() => setCount(count - 1)}
      />

      <h2>Task 4</h2>
      <Grandparent />

      <h2>Task 5</h2>
      <UserForm
        initialData={{ name: "Karthik", email: "karthik@gmail.com" }}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;