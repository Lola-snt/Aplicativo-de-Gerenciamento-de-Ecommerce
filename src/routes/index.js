import { NavigationContainer } from "@react-navigation/native";
import Tab from "./bottom-tabs.routes";
import PublicStack from "./public.routes";

export default function Rotas() {
  const logado = false;
  return <>{logado ? <PublicStack /> : <Tab />}</>;
}
