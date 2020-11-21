sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
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
    },

    onPress: function () {
      MessageToast.show("UI5 Message Toast Module!")
    }
  })
});