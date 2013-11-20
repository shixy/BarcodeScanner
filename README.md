BarcodeScanner
==============

phonegap android plugin 条码/二维码扫描解码

安装
===
1. 复制client中内容到project相对应的目录(根据错误进行修复)
2. 在project的res/xml/config.xml中添加
    ```
    <feature name="BarcodeScanner">
        <param name="android-package" value="com.google.zxing.client.android.plugin.BarcodeScanner"/>
    </feature>
    ```

3. 在project的AndroidManifest.xml中添加相关权限
    ```    
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.FLASHLIGHT" />
    ```
4. 复制www中的barcodescanner.js到asset/www中的相关目录，并通过你的页面引入

使用方法
=======
js中调用方法
    
    /**
	 * 条码/二维码扫描
	 * @mode  PRODUCT_MODE(产品注册码) | ONE_D_MODE(一维码) | QR_CODE_MODE(二维码) | DATA_MATRIX_MODE (DM码)| ''(扫描所有支持的类型)
	 *  
	 */
    window.plugins.barcodeScanner(mode,function(result){
        //success
        //result.text  条码值
        //result.format  条码规格
        //result.cancelled  是否被取消
    },function(){
        //error
    })
