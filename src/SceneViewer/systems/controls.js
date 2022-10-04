import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);
    // Makes the stopping of the animation more realistic, not hard stop. 
    // If we’re rendering frames on demand instead of using the loop, we cannot use damping.
    controls.enableDamping = true;
    controls.tick = () => controls.update();
    
    // Control zoom limits
    // controls.minDistance = 5;
    // controls.maxDistance = 20

    return controls;
}
export { createControls };