# Overview

This is a test project importing Mapbox library Expo app 

## Prerequisite for Android

1. `npm install` to install node dependencies
2. install Android studiod
3. install Java JDK
  - run `java --version` on terminal to see if Java is installed and recognized
4. install Expo go app on your android device
5. connect your android app to development desktop/lapto using usb
6. under /android folder, create `local.properties` file and specify android sdk directory
  - please see (https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil)[https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil]

### Possible bug and solution

("Failed to install the following Android SDK packages as some licences have not been accepted" error)[https://stackoverflow.com/questions/54273412/failed-to-install-the-following-android-sdk-packages-as-some-licences-have-not]

## Running Expo app on your android device
`npm run android`

if you are asked to type package name, you can give following name:
`io.expo.testMapbox` 

## More Resources
(React Native Expo installation)[https://github.com/react-native-mapbox-gl/maps/blob/master/plugin/install.md]
(Adding custom native code to Expo)[https://docs.expo.dev/workflow/customizing/]