import PrivateNavigation from "./bottom-tabs.routes";
import {PublicNavigation} from "./public.routes";

export default function Routes() {
  const logado = true;
  return <>{logado ? <PrivateNavigation/> : <PublicNavigation/>}</>;
}
