import { types, destroy, detach } from "mobx-state-tree";

export const Exemplo = types
  .model("Exemplo", {
    nome: types.union(types.string, types.number),
  });


const Store = types
  .model("ExemploStore", {
    rows: types.optional(types.array(Exemplo), []),
  })
  .actions(self => ({
    
    getFromDb(numberRows) {
      //return new Promise();

      return Promise.resolve("Success");
    },

  }));

const Exemplos = Store.create({});

export default Exemplos;
