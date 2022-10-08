---
sidebar_position: 4
---

# The Android Manifest

## What's the Android Manifest?
Every android app contains a manifest file (AndroidManifest.xml) which is an XML file that describes the essential information about your app to the android build tools, the android OS and google play.

Extensions are allowed to include extra tags to the app's android manifest when it's needed for a specific function in the extension.
Ex.: Declaring a new screen, so you could start it in your extension
:::tip
Check the [android documentation](https://developer.android.com/guide/topics/manifest/manifest-intro) for more information.
:::

:::info
The original idea for using android manifest in extensions was inspired from [Rush](https://github.com/shreyashsaitwal/rush-cli) by Shreyash Saitwal.
:::
## Writing the android manifest

The default android manifest is as follows:
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.example"
  android:versionCode="1"
  android:versionName="1.0" >
  <application>
    <!-- Define activities, services, and content providers here-->
  </application>
</manifest>
```
:::caution
Modifying the manifest or application tag attributes (ex.: package, version code, version name, etc..) would be ignored.
:::

Currently, the supported tags that could be added in the android manifest are: `<activity>`, `<receiver>`, `<provider>`, `<service>`, and `<uses-permission>`, where all the previous are added to the `<application>` tag except the `<uses-permission>` tag which is added in the `<manifest>` tag directly.

You could copy the android manifest XML tag from the source that asked you to include it (as long as it's one of the supported tags above) or write it by yourself in the XML code editor.

This is an example of a modified android manifest that includes some of the supported tags:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.example"
  android:versionCode="1"
  android:versionName="1.0" >
	<uses-permission android:name="android.permission.SEND_SMS"/> <!--Declares the SEND_SMS permission in the app's manifest-->
	<application>
		<!--This is an activity/screen that would be started when the user shares a text to the app.-->
		<activity android:name=".ShareActivity" android:exported="false">
			<intent-filter>
				<action android:name="android.intent.action.SEND"/>
				<category android:name="android.intent.category.DEFAULT"/>
				<data android:mimeType="text/plain"/>
			</intent-filter>
		</activity>
		<!--A normal service declaration-->
		<service android:name=".ExampleService" />
	</application>
</manifest>
```
