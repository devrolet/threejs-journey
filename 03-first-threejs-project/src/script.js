import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene 
const scene = new THREE.Scene();

// Geometry + Material = Three.js Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // wireframe: true
const mesh = new THREE.Mesh(geometry, material);
// Add object to scene
scene.add(mesh);

// ** MESH, POSITION, & SCALE ARE ALL VECTOR3 AS IT'S BASE CLASS **//

// POSITION (X, Y, Z)
// mesh.position.x = 0.7;
// mesh.position.y = -0.6
// mesh.position.z = 1;
mesh.position.set(0.7, -0.6, 1); // All at once

// SCALE
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5); // All at once

// ROTATION (with rotation or with quaternion)

// Rotation uses Euler, which is like inserting a stick through the axis and rotating on that stick

/** 
 * PREVENT GIMBAL LOCK when rotating axes using the .reorder method. 
 * it changes the xyz axes to your own combo yzx for example
**/
mesh.rotation.reorder('YXZ');
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;
// mesh.rotation.z = 
// Pi: 3.14159

// QUATERNION expresses a rotation but in a more mathematical way


// Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Normalizes the mesh position to 1.
// mesh.position.normalize()


const sizes = {
    width: 800, 
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
// Helps show Axes Helper if no value is added to it's call
// camera.position.y = 1;
// camera.position.x = 1;
scene.add(camera);

// LookAt method - provide a Vector3 arg
camera.lookAt(mesh.position)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

// console.log('Mesh Props: ', mesh.position.distanceTo(camera.position));

// Combining Transformations

// Scene Graph = Create a group to allow scaling of all objects instead of 1by1

