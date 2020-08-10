M0_ReactNative_TS

K6B.
React Native TypeScript empty project for OS setup test (type M0).

According to https://reactnative.dev/docs/environment-setup.

NOTE:
npx react-native init AwesomeTSProject --template react-native-template-typescript
installs with some errors.

Here was used next steps:

npx react-native init AwesomeJSProject;
cd AwesomeJSProject;
npx react-native init AwesomeTSProject --template react-native-template-typescript;
(React Native logo displays while install);
And move folder AwesomeTSProject from AwesomeJSProject;

UPDATED on K8A.
For update npm packages:
- delete node_modules
- delete yarn.lock
- run 'ncu -u' (npm-check-updates)
- run 'yarn'
That all.
- run 'react-native start'
- another terminal, 
  run 'react-native run-android'
Note: if something is broken, so set packages version according to nl-K8A.txt

Result files sizes (JSC - JavaScript compiler, H - Hermes engine):
								                     on K8A        on K6B
app-arm64-v8a-release-H.apk         5 145 633     4 957 217
app-arm64-v8a-release-JSC.apk       6 980 638     6 927 390
app-armeabi-v7a-release-H.apk       4 813 897     4 637 769
app-armeabi-v7a-release-JSC.apk     6 624 326     6 558 790
app-release-H.aab                  15 496 221    14 685 192
app-release-H.apk                  15 594 721    14 787 809
app-release-H+Proguard.aab         14 968 470
app-release-JSC.aab                23 022 937    22 777 688
app-release-JSC.apk                23 098 581    22 856 917
app-x86_64-release-H.apk            5 420 005     5 219 301
app-x86_64-release-JSC.apk          7 459 810     7 398 370
app-x86-release-H.apk               5 530 537     5 280 681
app-x86-release-JSC.apk             6 935 462     6 865 830
