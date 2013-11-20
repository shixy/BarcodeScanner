(function(){
	function BarcodeScanner() {};

	/**
	 * 条码/二维码扫描
	 * @mode  PRODUCT_MODE(产品注册码) | ONE_D_MODE(一维码) | QR_CODE_MODE(二维码) | DATA_MATRIX_MODE (DM码)| ''(扫描所有支持的类型)
	 *  
	 */
	BarcodeScanner.prototype.scan = function(mode,win,err){
		cordova.exec(win, err, "BarcodeScanner", "scan", [mode]);
	};


	if(!window.plugins) {
	    window.plugins = {};
	}
	if (!window.plugins.barcodeScanner) {
	    window.plugins.barcodeScanner = new BarcodeScanner();
	}	
})();
