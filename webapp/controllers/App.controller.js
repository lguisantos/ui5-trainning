sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
  "use strict";

  return Controller.extend("sap.ui.demo.walkthrough.views.App", {
    onInit: function () {

      var oData = {
        recipient: {
          name: "UI5 Developer!"
        }
      };

      // we need to transform our object in JSONModel to put them inside of View
      var oModel = new JSONModel(oData);
      this.getView().setModel(oModel);

      //set i18nModel on our view
      var i18nModel = new ResourceModel({
        bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        sopportedLocales: [""],
        fallbackLocale: ""
      });
      this.getView().setModel(i18nModel, "i18n")
    },

    onPress: function () {
      //read message form our i18nModel
      var oBundle = this.getView().getModel('i18n').getResourceBundle();
      var sRecipient = this.getView().getModel().getProperty("/recipient/name")
      // setting message inside sRecipient
      var sMsg = oBundle.getText("helloMsg", [sRecipient])
      MessageToast.show(sMsg)
    }
  })
});