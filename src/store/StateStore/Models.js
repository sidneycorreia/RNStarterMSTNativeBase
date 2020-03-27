/**
 * Created by jiloysss on 11/13/18.
 */
import { types } from "mobx-state-tree";

export const ModelSales = {
  discountSelection: types.optional(types.boolean, false),
  selectedCategoryIndex: types.optional(types.number, -2),
  salesListStatus: types.optional(types.boolean, false),
  searchStatus: types.optional(types.boolean, false),
  categoryValue: types.optional(types.string, "No Category"),
  commissionArray: types.optional(types.string, "[]"),
  categoryFilter: types.optional(types.boolean, true),
  selectedDiscount: types.optional(types.string, ""),
  selectedDiscountIndex: types.optional(types.number, 0),
  deleteDialogVisible: types.optional(types.boolean, false),
  quantityModalVisible: types.optional(types.boolean, false),
  priceModalVisible: types.optional(types.boolean, false),
  barcodeStatus: types.optional(types.string, "idle"),
  barcodeScannerInput: types.optional(types.string, ""),
  cash: types.optional(types.number, 0.0),
  change: types.optional(types.number, 0.0),
  discountSelectionStatus: types.optional(types.boolean, true),
  fetching: types.optional(types.boolean, false),
  confirmOrder: types.optional(types.boolean, false),
  addReceiptLineStatus: types.optional(types.boolean, false),
};
export const ModelListing = {
  itemStatus: types.optional(types.string, "idle"),
  categoryStatus: types.optional(types.string, "idle"),
  discountStatus: types.optional(types.string, "idle"),
  tabStatus: types.optional(types.number, 0),
  itemMaintenanceStatus: types.optional(types.boolean, false),
  taxObjects: types.optional(types.string, "[]"),
  printerStatus: types.optional(types.string, "Offline"),
};
export const ModelLogin = {
  loginStatus: types.optional(types.string, "idle"),
  verificationVisible: types.optional(types.boolean, false),
  pin: types.optional(types.string, ""),
  confirmPin: types.optional(types.string, ""),
  securityPinStatus: types.optional(types.boolean, true),
  securityConfirmPinStatus: types.optional(types.boolean, true),
  userName: types.optional(types.string, ""),
};
export const ModelPayment = {
  selected: types.optional(types.string, "Cash"),
  value: types.optional(types.string, "0"),
  amountDue: types.optional(types.string, "0.00"),
  amountChange: types.optional(types.string, "0.00"),
  itemSelected: types.optional(types.string, "key0"),
  connection: types.optional(types.boolean, false),
  connectionStatus: types.optional(types.string, "Offline"),
  modalVisible: types.optional(types.boolean, false),
  customerName: types.optional(types.string, ""),
  customerEmail: types.optional(types.string, ""),
  customerPhoneNumber: types.optional(types.string, ""),
  customerNotes: types.optional(types.string, ""),
  arrayObjects: types.optional(types.string, "[]"),
};
export const ModelSettings = {
  availableDevices: types.optional(types.boolean, false),
  connected: types.optional(types.string, ""),
  connectionStatus: types.optional(types.string, "Not Connected"),
  currentAddress: types.optional(types.string, ""),
  companyName: types.optional(types.string, ""),
  tax: types.optional(types.string, "0"),
  companyHeader: types.optional(types.string, ""),
  companyFooter: types.optional(types.string, ""),
  companyCurrency: types.optional(types.string, ""),
  checkBoxBluetoothValue: types.optional(types.boolean, false),
  checkBoxValue: types.optional(types.string, ""),
  attendants: types.optional(types.string, "[]"),
  // attendantsInfo: {},
  url: types.optional(types.string, ""),
  user_name: types.optional(types.string, ""),
  password: types.optional(types.string, ""),
  syncEditStatus: types.optional(types.boolean, false),
};
