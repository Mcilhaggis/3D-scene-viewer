import { loadLittleTokyo } from './components/models/littleTokyo.js';
import { loadModel } from './components/models/loadModel.js';

import { createMenu } from './components/menu.js';
import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let menu;
let renderer;
let scene;
let loop;
let controls;
let config;

class SceneViewer {
    // 1. Create an instance of the World app
    constructor(container, _config) {
        config = _config
        camera = createCamera(config);
        scene = createScene(config);
        renderer = createRenderer();
        menu = createMenu();
        controls = createControls(camera, renderer.domElement);
        controls.addEventListener('change', () => {
            this.render();
        });

        loop = new Loop(camera, scene, renderer);

        container.append(renderer.domElement);
        const { ambientLight, mainLight } = createLights();

        // Enabled damping animation
        loop.updatables.push(controls);
   
        scene.add(ambientLight, mainLight);
        const resizer = new Resizer(container, camera, renderer);
    }


    async init() {
        console.log('******config', config)
        const { model } = await loadModel(config);
        controls.target.copy(model.position);
        scene.add(model)
    }

    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}


export { SceneViewer };