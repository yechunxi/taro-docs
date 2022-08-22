---
title: React Native Development Process
---


> This article mainly explains the development process of Taro React Native side, please see [Note before development](./react-native-remind.md).
> 
> Taro3.x cross-platform（h5、weapp、rn）project development can refer to:[Taro cross-platform demo（React Native + Weapp + h5）](https://github.com/wuba/Taro-Mortgage-Calculator)
> 
> For Taro React Native APP development debugging tool, please check [Taro Playground](https://github.com/wuba/taro-playground) project.

## Introduction

Taro APP development is based on Facebook's open source project [React Native](https://github.com/facebook/react-native). The Taro project developed with the **React** framework can be compiled into a bundle file for React Native after some adaptation, and then compiled into Android and iOS APPs with the tools for the corresponding platforms.

The overall design is as follows.

![image](https://pic8.58cdn.com.cn/nowater/frs/n_v287a918607dea4ac7b28471aef4fc8b6f.pic)

## Pre-development

To make your future development smoother, we strongly recommend that you learn about React Native development first. Learning materials can be found on the [React Native Chinese website](https://reactnative.cn/docs/getting-started) or on the [React Native official website](https://reactnative.dev/docs/getting-started).

After you finish learning the basics, it is recommended to get started and finish building the environment and make sure it can run well. For environment setup, please refer to [React Native Chinese website](https://reactnative.cn/docs/environment-setup) and [React Native official website](https://reactnative.dev/docs/environment-setup).

## Development Modes

Taro provides two modes for developing React Native APP.

0. Integration mode: JS, iOS, Android in the same repository, projects that are generated by `taro init` and choose react-native template will use this mode. The structure of the project is basically the same as the one generated by `npx react-native init AwesomeProject`. **Starting developers are recommended to use this pattern**.
1. Separate mode: JS code in one repository, iOS and Android code in another (also called shell project). The shell project code can be forked [Taro Native Shell Project](https://github.com/NervJS/taro-native-shell).

## Taro's version compatibility with React Native

We will be compatible with the latest version React Native mainly, and keep up with community developments.

| React Native Versions | Compatibility | Shell Project Branch |
| - | - | - |
| < 0.60.0 | Not compatible, consider using Taro version 1.x/2.x | - |
| 0.60.x | <=3.4.2 compatible, but not fully tested, please provide issue | [0.63.2](https://github.com/NervJS/taro-native-shell/tree/0.63.2), change react-native version to 0.60.0 |
| 0.61.x | <=3.4.2 compatible, but not fully tested, please provide issue | [0.63.2](https://github.com/NervJS/taro-native-shell/tree/0.63.2), change react-native version to 0.61.0 |
| 0.62.x | <=3.4.2 compatible, but not fully tested, please provide issue | [0.63.2](https://github.com/NervJS/taro-native-shell/tree/0.63.2), change react-native version to 0.62.0 |
| 0.63.x | >= 3.2.0, but after version 3.2.13, you need to add the configuration manually, refer to [PR](https://github.com/NervJS/taro/pull/9540) | [0.63.2](https://github.com/NervJS/taro-native-shell/tree/0.63.2) |
| 0.64.x | >= 3.2.0 | [0.64.0](https://github.com/NervJS/taro-native-shell/tree/0.64.0) |
| 0.65.x | >= 3.3.10 | - |
| 0.66.x | >= 3.3.10 | [0.66.0](https://github.com/NervJS/taro-native-shell/tree/0.66.0) |
| 0.67.x | >= 3.3.10, unimodules | [0.67.0](https://github.com/NervJS/taro-native-shell/tree/0.67.0) |
| 0.67.x | >= 3.3.10, expo | [0.67.0-expo](https://github.com/NervJS/taro-native-shell/tree/0.67.0-expo) |
| 0.68.x | >= 3.5.0 | [0.68.0](https://github.com/NervJS/taro-native-shell/tree/0.68.0) |

## Integration mode

Initialize with the `taro init` command, selecting the `react-native` template. **After completion execute `yarn upgradePeerdeps` for dependency initialization**.

Check out the [demo video](https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/6820cfd5e0346eac050e7c3f0df78f65.mp4).

### Common commands

```shell
# Update related dependencies. Executed after initialization is complete or after a Taro version update to synchronize peerDependencies.
$ yarn upgradePeerdeps

# Package js bundles and static resources. Executed after initialization to package the bundle used by default. platform Optional: ios, android
$ yarn build:rn --platform ios

# Start the bundle server
$ yarn start

# Start iOS
$ yarn ios

# Start Android
$ yarn android
```

## Separate mode

Use the `taro init` command to initialize and select the default template. fork shell project code [Taro Native Shell Project](https://github.com/NervJS/taro-native-shell).

### Configure output
As the JS project products need to be exported to the shell project in split mode, merge them to complete the packaging.
This can be done by modifying the configuration `. /config/index.js` to specify the resource output directory, e.g.

```js
{
  rn: {
    output: {
      iosSourceMapUrl: '', // sourcemap file url
      iosSourcemapOutput: '../taro-native-shell/ios/main.map', // sourcemap file output path
      iosSourcemapSourcesRoot: '', // The root directory when converting sourcemap resource paths to relative paths
      androidSourceMapUrl: '',
      androidSourcemapOutput: '../taro-native-shell/android/app/src/main/assets/index.android.map',
      androidSourcemapSourcesRoot: '',
      ios: '../taro-native-shell/ios/main.jsbundle',
      iosAssetsDest: '../taro-native-shell/ios',
      android: '../taro-native-shell/android/app/src/main/assets/index.android.bundle',
      androidAssetsDest: '../taro-native-shell/android/app/src/main/res'
    },
  }
}
```

### JS Project Common Commands

```shell
# Start the bundle server
$ yarn dev:rn

# Package js bundle and static resources. platform optional ios, android
$ yarn build:rn --platform ios
```

### Common commands for shell projects

```shell
# Update dependencies. run after Taro version update to synchronize peerDependencies.
$ yarn upgradePeerdeps

# Start iOS
$ yarn ios

# Start Android
$ yarn android
```

## Debugging with Taro Playground APP

To facilitate developers with no native development experience to experience Taro, we provide a highly integrated development environment [Taro Playground](https://github.com/wuba/taro-playground). Developers only need to run the JS project normally to debug the APP.

Meanwhile, Taro Playground APP project provides reference code for learning.

Check out the [demo video](https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/09efc622c1f3fa25574d874314f4a421.mp4).

### Development Debugging

Run the following command to start the metro server and print the QR code.
```shell
yarn dev:rn --qr
```

Open the Taro Playground APP, scan the QR code or type `ip:port` in the input box, and load the dev bundle for debugging.

### debugging release bundle

Run the following command to start the http server and print the QR code.
```shell
yarn build:rn --qr --platform ios
```

Open the Taro Playground APP, scan the QR code, and load the release bundle for debugging. Note that Android and ios need to be verified separately.

### Share the release bundle

Using Taro Playground APP + GitHub Action + jsdelivr, we can share our APP via QR code, see [taro-react-native-release project](https://github.com/zhiqingchen/taro-react-native-release).

Check out the [demo video](https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/4c2ea6b807331f319c5fca2a673b454b.mp4).

## Packaging and releasing Android packages

Learn [how to package and release Android packages in React Native](https://www.react-native.cn/docs/signed-apk-android). Taro provides a template for React Native that integrates with GitHub Action. See [assemble_android_release](https://github.com/wuba/taro-playground/blob/main/.github/workflows/assemble_android_release.yml).

The main steps include the following.

1. `yarn`
2. `yarn build:rn --platform android`
3. linux: `sudo apt install -y ruby-bundler`, mac: `gem install bundler`
4. `cd android && bundle update && bundle exec fastlane assemble`

Without using CI tools.

1. `yarn`
2. `yarn build:rn --platform android`
3. `cd android && ./gradlew assembleRelease` Or use Android Studio

## Package and release to APP Store

Learn [how to package and release iOS packages in React Native](https://www.react-native.cn/docs/publishing-to-app-store). Taro provides a template for React Native that integrates with GitHub Action, so you can use GitHub for packaging, see [assemble_ios_release](https://github.com/wuba/taro-playground/blob/main/.github/workflows/assemble_ios_release.yml).

The main steps include the following.

1. import certificate
2. `yarn`
3. `yarn build:rn --platform ios`
4. `npx pod-install`
5. `export SKIP_BUNDLING=1`
6. `cd ios && bundle update && bundle exec fastlane build_release`

Without using CI tools.

1. `yarn`
2. `yarn build:rn --platform ios`
3. Packaging with Xcode

## Advanced tutorials

### Customizing native dependencies

Taro does on-demand loading of interfaces, so that unneeded native dependencies can be left uninstalled to reduce the APP package size. If the APP does not involve audio and video, you can remove the expo-av dependency directly.

### Custom metro configuration

Taro uses the transformer and resolver in metro, which can be merged with user configuration.

Taro's default configuration is `const { defaultConfig } = require('@tarojs/rn-runner/dist/config')`, you can refer to the source code for deeper customization.

## FAQ

### How can I tell if I'm successful when I start metro server via yarn start or yarn dev:rn?

- After starting, you can see `React-Native Dev server is running on port: 8081` in the terminal
- Type http://127.0.0.1:8081/status in your browser and you will see packager-status:running
- Typing http://127.0.0.1:8081/index.bundle?platform=ios&dev=true in the browser will trigger the build, and you will see the following message in the terminal.

BUNDLE  ./index ░░░░░░░░░░░░░░░░ 0.0% (0/173)

If there are any errors during the process, you will be prompted in the terminal, and if there are no errors, you will see a green message:

BUNDLE  ./index

The above three steps are normal, which means that the metro server is started normally.

### yarn ios runs with error: main.jsbundle: No such file or directory

```
yarn build:rn --platform ios
```

###  Updated `app.config` file, but found that it was not updated successfully.

The metro cache is causing this, try `yarn dev:rn --reset-cache`

### requireNativeComponent: "RNCSafeAreaProvider" was not found in the UIManager.

Usually some dependencies are not installed, try `yarn upgradePeerdeps` or check if any dependencies are missing.

### yarn upgradePeerdeps did not execute successfully

Manually execute `install-peerdeps @tarojs/taro-rn -o -Y && install-peerdeps @tarojs/components-rn -o -Y && install-peerdeps @tarojs/router-rn -o -Y && pod-install`

### install-peerdeps also does not execute successfully

See [@tarojs/taro-rn](https://github.com/NervJS/taro/blob/next/packages/taro-rn/package.json)、[@tarojs/router-rn](https://github.com/NervJS/taro/blob/next/packages/taro-router-rn/package.json)、[@tarojs/components-rn](https://github.com/NervJS/taro/blob/next/packages/taro-components-rn/package.json)  of peerDependencies and install them manually.

Or align with the `dependencies` in the `package.json` file of [Taro Native Shell](https://github.com/NervJS/taro-native-shell).

### Invariant Violation: Tried to register two views with the same name RNCWebView

This kind of problem is usually caused by installing multiple versions of the native dependencies. Check why multiple versions are installed by first using `yarn why xxx`, which in the example is `yarn why react-native-webview`. Lock the required version via resolutions, we recommend using the version in [@tarojs/taro-rn](https://github.com/NervJS/taro/blob/next/packages/taro-rn/package.json), [@tarojs/router-rn](https://github.com/NervJS/taro/blob/next/packages/taro-router-rn/package.json), [@tarojs/components-rn](https://github.com/NervJS/taro/blob/next/packages/taro-components-rn/package.json).

### packager Not Available

If the packager is not available after scanning the code with Taro Playground, it is usually a network problem, check if your phone and computer are on the same LAN.

### Invariant Violation: "taroDemo" has not been registered.

Check if the `config/index.js` file has changed the appName, the default is `taroDemo`.

```js
{
  rn: {
    appName: 'taroDemo',
  }
}
```

### How to modify appName?

0. modify `rn.appName` in `config/index.js`
1. modify the return value of the `getMainComponentName` method in `MainActivity.java`
2. modify `moduleName` of `RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"taroDemo" initialProperties:nil];` in  `AppDelegate.m`

### Library not found for -IDoubleConversion

When compiling with XCode, the file to open is `ios/taroDemo.xcworkspace`

### Entry file index.js does not exist. If you use another file as your entry point, pass ENTRY_FILE=myindex.js

Taro React Native jdbundle files are packaged by Taro (yarn build:rn) and if you use React Native's own command to package them (react-native bundle), you will get the error above. So we need to skip the original packaging phase of React Native.

react-native/ios/taroDemo.xcodeproj/project.pbxproj

```diff
-			shellScript = "set -e\n\nexport NODE_BINARY=node\n../node_modules/react-native/scripts/react-native-xcode.sh\n";
+			shellScript = "set -e\n\nexport NODE_BINARY=node\nexport SKIP_BUNDLING=1\n../node_modules/react-native/scripts/react-native-xcode.sh\n";
```

android/app/build.gradle

```diff
-apply from: "../../node_modules/react-native/react.gradle"
+// apply from: "../../node_modules/react-native/react.gradle"
```