import PrivateNavigation from "./bottom-tabs.routes";
import {PublicNavigation} from "./public.routes";

export default function Routes() {
  const logado = false;
  return <>{logado ? <PrivateNavigation/> : <PublicNavigation/>}</>;
}
