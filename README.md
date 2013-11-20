BarcodeScanner
==============

phonegap android plugin 条码/二维码扫描解码

安装
===
1. 复制client中内容到project相对应的目录
2. 在project的res/xml/config.xml中添加
    ```
    <feature name="BarcodeScanner">
        <param name="android-package" value="com.jingle.zxing.plugin.BarcodeScanner"/>
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
     * @param mode  
     * one 只扫描一维码
     * qr  只扫描二维码
     * all 扫描所有支持的码
     */
    window.plugins.barcodeScanner(mode,function(result){
        //success
        //result.text  条码值
        //result.format  条码规格
        //result.cancelled  是否被取消
    },function(){
        //error
    })
