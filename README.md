BarcodeScanner
==============

phonegap android plugin 条码/二维码扫描解码

安装
===
+ 复制client中内容到project相对应的目录
+ 在project的res/xml/config.xml中添加
    <feature name="BarcodeScanner">
        <param name="android-package" value="com.jingle.zxing.plugin.BarcodeScanner"/>
    </feature>
+在project的AndroidManifest.xml中添加相关权限
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.FLASHLIGHT" />
+复制www中的barcodescanner.js到asset/www中的相关目录，并通过你的页面引入

使用方法
=======
