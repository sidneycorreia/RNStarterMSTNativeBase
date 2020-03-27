import ExemploStore from "@appStore/ExemploStore";
import StateStore from "../store/StateStore/StateStore";

export default function() {
  const stateStore = StateStore;
  const exemploStore = ExemploStore;

  return {
    exemploStore,
    stateStore,
  };
}
