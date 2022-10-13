# Scene Viewer with Three.js
```
npm i 
```
```
npm run build
```
For continous monitoring for changes:
```
webpack --watch 
```
Then open in a live server 


---
## Structure
### /Scene Viewer
#### Components 
Camera - Position of where the camera is angled towards in the scene 
Lights - Select and set position, colour, inesity of light(s) used in the scene. Multiple can be added but for perfomance optimisation (1)Hemisphere Light + (1) Directional Light is best.
Menu - A static pane to ohld menu and control options that does not move with the respositioning of any items. 
Scene - The host of all the other elements, we add our components to here and layer our end result. 
 /Models - holds the dynamic code that loads and set up our model to be displayed. The position is configurable from the json file. 
#### Systems 
controls.js - Pulls from a plugin called OrbjitControls.js. Allows for the dragging and spining of the model with the mouse. Options for max and min allowance on zooming in and out can be set here. 
Loop.js - (Not currently in use) If we wanted to have the model, lights or camera move in a direction based on time (tick) we pass them through this file. 
renderer.js - Renders the WebGLRenderer required to display the scene. 
Resizer.js - If the window is resized then the object will resize to stay in proportion with this file. 

### /Vendor
Hosts all of the plugins used throughout. 

---
## Wants: 
- keyboard navigation 
- No screen reader description
- Clickable/keyboard controls to move and rotate object and toggle labels
- The bottom of the I-Frame visible in fullscreen at 200%


## Stretch goals
- Having a test page on the 101 for anyone to test lighting, camera position and scale 


## Concerns to tackle from Sketchfab integration:
- No movement of object with keyboard when in orbit mode, and limited movement in first-person mode


## Features
- Import data (images and controls) from json files

---