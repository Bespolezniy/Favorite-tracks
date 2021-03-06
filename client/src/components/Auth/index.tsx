import React, { useState } from "react";

import Login from "./Login";
import Register from "./Register";
import withRoot from "../../utils/withRoot";

export default withRoot(() => {
  const [newUser, setNewUser] = useState<boolean>(true);

  return newUser ? (
    <Register setNewUser={setNewUser} />
  ) : (
    <Login setNewUser={setNewUser} />
  );
});
