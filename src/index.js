import {SceneViewer} from './SceneViewer/SceneViewer'
import './style.css'

// create the main function
function main() {
    const container = document.querySelector('#scene-container');

    const viewer = new SceneViewer(container);
    viewer.render();

}
  
  // call main to start the app
  main();