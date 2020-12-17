
module.exports = {

	pluginName: "NativeLogs",

	getLog:function(_nbLines,_bCopyToClipboard,successCB,failureCB){
		cordova.exec(successCB, failureCB, this.pluginName,"getLog", [_nbLines,_bCopyToClipboard]);
	},

	getPushwooshLog:function(_nbLines,_bCopyToClipboard,successCB,failureCB){
		cordova.exec(successCB, failureCB, this.pluginName,"getPushwooshLog", [_nbLines,_bCopyToClipboard]);
	}
};



