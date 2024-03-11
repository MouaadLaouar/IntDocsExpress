import React from "react";
import useAuth from "../Hooks/useAuth";

import AuthStack from "./AuthStack";
import UserStack from "./UserStack";

const RootNavigation = () => {
  const { userID } = useAuth();

  return userID ? <UserStack /> : <AuthStack />
};

export default RootNavigation;
