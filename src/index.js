import { SceneViewer } from './SceneViewer/SceneViewer';
import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from "three";

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  // Load the scene viewer before it loads on the DOM 
  componentDidMount() {
    // Get canvas, pass to custom class
    const canvas = this.canvasRef.current;
    this.SceneViewer = new SceneViewer(canvas);
    console.log(this.SceneViewer)

    // Init any event listeners
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps, prevState) {
    // Pass updated props to 
    const newValue = this.props.whateverProperty;
    this.SceneViewer.updateValue(newValue);

  }

  componentWillUnmount() {
    // Remove any event listeners
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('resize', this.handleResize);
  }

  // // ******************* EVENT LISTENERS ******************* //
  // mouseMove = (event) => {
  //     this.SceneViewer.onMouseMove();
  // }

  // handleResize = () => {
  //     this.SceneViewer.onWindowResize(window.innerWidth, window.innerHeight);
  // };


  // render() {
  // console.log(this.canvasRef)
  // return (
  //     <div class="canvasContainer">
  //         <canvas ref={this.canvasRef} />
  //     </div>
  // );
  // }
  // }
  // const container = document.getElementById('SceneViewerApp');
  // const root = createRoot(container); // createRoot(container!) if you use TypeScript
  // root.render(<App tab="home" />);


  // // create the main function but wait for the models to initalise 
  // async function main() {
  //   const container = document.querySelector('.scene-container');

  //   const viewer = new SceneViewer(container);
  //   // complete async tasks
  //   await viewer.init();
  //   // Switch to a render load for improvement of running on lower power devices 
  //   // produce a single frame (render on demand)
  // viewer.render();
  // rendering on demand, we are now only generating new frames when the user interacts with the scene and moves the camera. As soon as you move the controls, sure enough, a new frame will be created and the texture will show up.
  // As a result, you also need to generate a new frame after the texture has loaded. We won’t cover how to do that here, but hopefully, it highlights why rendering on demand is trickier than using the loop. You have to consider all situations where you need a new frame (for example, don’t forget that you’ll also need to render a frame on resize).
}
this.SceneViewer.start();
// call main to start the app
main().catch((err) => {
  console.error(err);
});
      // }