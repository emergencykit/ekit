# Comments from Relief Applications
Authors: Relief Applications team : [reliefapps.org](http://reliefapps.org)
## General comments

### .keystroe
We created a .keystore to be able to deploy.
### Spashscreen

The app needs a splashscreen to avoid white screen on.

To do so you need to add a splashscreen in the ressources and to run `ionic cordova resources android`

### config.xml
The version number is build as followed XXYYZZ99 (99 is a random number)

eg:
* Major.Minor.Build = 1.3.7
* Android version number will be 01030799

- Specify the minimum Android version (I'll recommend API 19)  
