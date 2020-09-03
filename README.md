# Rail React Native Repo
Repository for POC Rail React Native Project

## Software Installation
 **A. Install Git**\
 Follow the instructions on https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
 
 **B. Install Node Package Manager i.e. NPM**\
Follow the instructions on https://nodejs.org/en/download/ and download NPM for your machine.

**C. Install Expo CLI**\
 Follow the instructions on https://docs.expo.io/get-started/installation/ or run `npm install -g expo-cli` in your terminal
 
**D. Install Android Studio and Setup Simulator**\
Follow the instructions on https://docs.expo.io/workflow/android-studio-emulator/.

Before the instructions for Step 2: Set up a virtual device, after Step 1: Set up Android Studio's tools:

 1. Open Android Studio
 2. Click "Start a new Android Studio Project"
 3. Select "Empty Activity" Project Template
 4. Click Finish
 5. In the opened project go to Tools > AVD Manager
 6. Click "+ Create Virtual Device…"
 7. Select a phone model. (Pixel is the recommended model)
 8. Select and download an image (Choose the one they recommend)
 9. Follow the steps to download and install image

**E. (For Macs Only) Install Xcode**\
 Follow the instructions on https://docs.expo.io/workflow/ios-simulator/

**F. Expo App (For testing the project on a handheld device)**\
For iOS: Install Expo Client  
https://apps.apple.com/us/app/expo-client/id982107779  
For Android: Insall Expo  
https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US  
 
## Project Installation
1. Clone this repository
2. Change into the `rail-rn` project directory and run `npm install`
3. Clone the `rail-rn-json-server` repo
4. Change into the `rail-rn-json-server` repo and run `npm install`

## Running Project\
**Perform these steps before choosing which device to run project on**
1. In `rail-rn-json-server` repo run `json-server db.json -m ./node_modules/json-server-auth -r routes.json`
2. Then in another terminal window, change into `rail-rn-json-server` and run `ngrok http 3000`
3. Copy the first http://...ngrok.io URL (Note, this URL is only valid for 8 hours. After 8 hours you'll have to run `nrgok http 3000` again
4. In `rail-rn` source code, open up the `src/api/rail.js` file.
5. Replace the URL in the `baseURL` field with the URL you just copied and save changes to that file.

**On handheld device:**
1. In Rail project directory run `npm start`
2. Scan the QR Code from the terminal or the browser-based DevTools UI

**On Android Emulator:**
1. Open Android Studio
2. Open project made during Software Installation section
3. Go to Tools > AVD Manager
4. Run emulator for any device
5. In Rail project directory run `npm start`
6. Click on "Run on Android device/emulator" on the browser-based DevTools UI
(If this is the first time you are running an expo project on the emulator, Expo will be installed first. After expo installation, close the emulator and click on "Run on Android device/emulator" again.)

**On iOS Simulator:**
1. In Rail project directory run `npm start`
2. Click on "Run on iOS Simulator" on the browser-based DevTools UI
(If this is the first time you are running an expo project on the simulator, Expo will be installed first. After expo installation, close the emulator and click on "Run on iOS Simulator" again.)
