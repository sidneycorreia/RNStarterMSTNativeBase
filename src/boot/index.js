import config from "./configureStore";
import app from "./setup";
import { retrieveSettings } from "../services/storage";

// global.Buffer = require("buffer").Buffer;

export default function() {
  const stores = config();

  let exemploPromise = stores.exemploStore.getFromDb(20);

  retrieveSettings().then(item => {
    if (item) {
      //seta alguma informacoes na store q estão armazenadas no storage
      // stores.stateStore.setDeviceId(item.deviceId);
    }
  });

  Promise.all([
    exemploPromise,
  ]);
    // .then(() => stores.receiptStore.setDefaultCustomer())
    // .then(() =>
    //   stores.receiptStore.currentReceipt(
    //     stores.printerStore.companySettings[0].tax,
    //   ),
    // );

  return app(stores);
}
