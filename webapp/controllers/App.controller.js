sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("sap.ui.demo.walkthrough.views.App", {
 
    onPress: function () {
      //read message form our i18nModel
      var oBundle = this.getView().getModel('i18n').getResourceBundle();
      var sRecipient = this.getView().getModel().getProperty("/recipient/name")
      // setting message inside sRecipient
      var sMsg = oBundle.getText("helloMsg", [sRecipient])
      MessageToast.show(sMsg)
    }
  });
});