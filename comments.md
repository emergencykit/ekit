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

### Unused variables

Be careful to the unused variables and imports

eg: in the WeatherProvider

## Styleguide

* Indent the code, it's way better for understanding

eg:
<div>                           <div>
  <p></p>     YES               <p></p>       NO
</div>                             </div>

* Align code when you feel it could be more readable

eg:
this.disasters = [];                       this.disasters = [];
this.jobs      = [];     YES               this.jobs = [];          NO
this.reports   = [];                       this.reports = [];

* Don't hesitate to leave line breaks to make the code more readable

## Git

### node_modules

The node_modules should be placed in the .gitignore, they already are
BUT
they are still in the project on Github, so it means that everytime you push or pull, you expose yourself to conflicts
