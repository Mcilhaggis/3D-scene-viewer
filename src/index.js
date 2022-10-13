import { SceneViewer } from './SceneViewer/SceneViewer'
import './style.css'
// create the main function but wait for the models to initalise 

async function buildScene() {
  let viewer;
  let sceneContainers = document.querySelectorAll('.testingFind')

  // get the json for each scene
  for (let item of sceneContainers) {
    const _configFile = item.dataset.config;
    let dataGrab = await fetch(_configFile)
    let json = await dataGrab.json()
    let _config = json
    viewer = new SceneViewer(item, _config);
  }
    return viewer;
}

async function main() {
  try {
    let result = await buildScene()
    // complete async tasks
    // Switch to a render load for improvement of running on lower power devices 
    // produce a single frame (render on demand)
    // viewer.render();
    // rendering on demand, we are now only generating new frames when the user interacts with the scene and moves the camera. As soon as you move the controls, sure enough, a new frame will be created and the texture will show up.
    // As a result, you also need to generate a new frame after the texture has loaded. We won’t cover how to do that here, but hopefully, it highlights why rendering on demand is trickier than using the loop. You have to consider all situations where you need a new frame (for example, don’t forget that you’ll also need to render a frame on resize).
    await result.init();
    result.start();

  } catch (error) {
    // do something with the error, so that you can see it
    console.log(error)
    res.status(400).send('An unexpected error occurred')
  }
}

// call main to start the app
main().catch((err) => {
  console.error(err);
});