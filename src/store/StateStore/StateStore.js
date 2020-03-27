import { types } from "mobx-state-tree";

const StateStore = types
  .model("StateStore", {    
    exemplo: types.optional(types.string, ""),

  })
  .actions(self => ({
    
    setExemplo(value) {
      self.deviceId = deviceId;
    },
    toggleIsStackItem() {
      self.exemplo = "Ié Ié uhuuu";
    },
  }));

const Store = StateStore.create({});

export default Store;
