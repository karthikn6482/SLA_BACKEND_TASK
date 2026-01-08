import ProfileCardFn from "./components/ProfileCardFn";
import ProfileCardClass from "./components/ProfileCardClass";

import RenderingPlayground from "./components/RenderingPlayground";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import { useState } from "react";
import UserStatus from "./components/UserStatus";

function App() {
  
  // return (
  //   // <div style={{ display: "flex", justifyContent: "center" }}>

  //   <div>

  //     {/* <ProfileCardFn />
  //     <ProfileCardClass /> */}

  //     {/* <RenderingPlayground /> */}
      
  //         <nav style={{ padding: "15px", background: "#eee", display: "flex", justifyContent: "center" }}>
  //           <Link to="/" style={{ margin: "10px" }}>Home</Link>
  //           <Link to="/about" style={{ margin: "10px" }}>About</Link>
  //           <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
  //         </nav>

  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //           <Route path="/about" element={<About />} />
  //           <Route path="/contact" element={<Contact />} />
  //         </Routes>

  //   </div>
  // );

  const [user, setUser] = useState(null);

  const toggleUser = () => {
    if (user === null) {
      setUser({
        name: "Karthikeyan",
        email: "karthi@gmail.com",
        isActive: true,
      });
    } else {
      setUser(null);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={toggleUser}>
        {user === null ? "Load User" : "Clear User"}
      </button>

      <UserStatus user={user} />
    </div>
  );

}

export default App;