import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Three.js way of tracking time: Clock
const clock = new THREE.Clock()

// Animations 
const tick = () => {

    // Ensure animation works same regardless of framerate w/ Clock
    const elapsedTime = clock.getElapsedTime();
    // console.log(elapsedTime);
    
    // Update objects
    // mesh.position.x -= 0.01;
    // mesh.position.y += 0.01;
    // mesh.rotation.y = elapsedTime * Math.PI * 2;

    // Obj rotates in a circle
    // mesh.position.y = Math.sin(elapsedTime);
    // mesh.position.x = Math.cos(elapsedTime);

    // Camera rotates in a circle
    camera.position.y = Math.sin(elapsedTime);
    camera.position.x = Math.cos(elapsedTime);
    camera.lookAt(mesh.position);

    // Render
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
}
// Make sure you call the function. Otherwise the reqAniFrame func won't work
tick();