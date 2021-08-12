import React from "react";
import "./App.css";
import Name from "./Component/Profile/Name";
import Job from "./Component/Profile/Job";
import Address from "./Component/Profile/Address";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
function App() {
  return (
    <div className="back">
      <h1>Hello it's me</h1>
      <ProfilePhoto/>
     <div className = "info">
     
     <Name/>
     <Job/>
     <Address/>
     </div>

     </div>
     
  );
}

export default App;
