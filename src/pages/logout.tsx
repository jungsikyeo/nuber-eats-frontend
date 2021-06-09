import { useApolloClient } from "@apollo/client";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeLogout } from "../apollo";

export const Logout = () => {
  const history = useHistory();
  const client = useApolloClient();

  useEffect(() => {
    client.cache.reset().then(async () => {
      await makeLogout();
    });

    history.push("/");
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <span className="font-medium text-xl tracking-wide">Loading...</span>
    </div>
  );
};
