document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	navigator.splashscreen.hide();
	deviceInfoApp = new deviceInfoApp();
	deviceInfoApp.run();
}

function deviceInfoApp() {
}

deviceInfoApp.prototype = {
    
	run:function() {
		var that = this;
		document.getElementById("deviceName").addEventListener("click", function() {
			that._viewDeviceName.apply(that, arguments);
		});
		document.getElementById("deviceCordovaVersion").addEventListener("click", function() {
			that._viewCordovaVersion.apply(that, arguments);
		});
		document.getElementById("devicePlatform").addEventListener("click", function() {
			that._viewDevicePlatform.apply(that, arguments);
		});
		document.getElementById("deviceUUID").addEventListener("click", function() {
			that._viewDeviceUUID.apply(that, arguments);
		});
		document.getElementById("oSVersion").addEventListener("click", function() {
			that._viewOSVersion.apply(that, arguments);
		});
	},
    
	_viewDeviceName : function() {
	    var result = document.getElementById("result");
	    result.innerHTML = device.model;
	},
    
	_viewCordovaVersion : function() {
	    var result = document.getElementById("result");
	    result.innerHTML = device.cordova;
	},
    
	_viewDevicePlatform : function () {
	    var result = document.getElementById("result");
		result.innerHTML = device.platform;
	},
    
	_viewDeviceUUID : function () {
	    var result = document.getElementById("result");
	    result.innerHTML = device.uuid;
	},
    
	_viewOSVersion:function viewOSVersion() {
		var result = document.getElementById("result");
		result.innerHTML = device.version;
	}
};