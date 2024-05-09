import { NavigationContainer } from "@react-navigation/native";
import Tab from "./bottom-tabs.routes";
import PublicStack from "./bottom-publictabs.routes";

export default function Rotas() {
  const logado = false;
  return <>{logado ? <PublicStack /> : <Tab />}</>;
}
