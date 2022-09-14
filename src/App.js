import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Params from "./component/Params/Params";
import Home from "./Pages/Home";
import Model from "./Pages/Model";
import Tests from "./Pages/Tests";
import Diller from "./component/Diller/Diller";
import firebase from "./component/firebase/config";
import Registration from "./component/Registration/Registration";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={user ? <Home user={user} /> : <Registration />} />
        <Route path="/model" element={<Model />} />
        <Route path="/:id" element={<Params />} />
        <Route path="/test" element={<Tests />} />
        <Route path="/diller" element={<Diller />} />
      </Routes>
    </div>
  );
}

export default App;
