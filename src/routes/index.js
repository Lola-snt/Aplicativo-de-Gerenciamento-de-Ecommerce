import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import PrivateNavigation from "./bottom-tabs.routes";
import { PublicNavigation } from "./public.routes";

export default function Routes() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {authCtx.isAuthenticated ? <PrivateNavigation /> : <PublicNavigation />}
    </>
  );
}
