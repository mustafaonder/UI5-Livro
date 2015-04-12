sap.ui.controller("view.b", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.b
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.b
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.b
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.b
*/
//	onExit: function() {
//
//	}
	
	
	onPressBack: function(){
		 var back = sap.ui.getCore().byId("view_a");
		 sap.ui.getCore().byId("main_container").back(back,"flip");
	},

	onPressNext: function(){
		var next = sap.ui.getCore().byId("view_c");
		sap.ui.getCore().byId("main_container").to(next,"fade");
	}
	

});