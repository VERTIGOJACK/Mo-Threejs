import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

const gtlfPath = "/lib/gltf/mo-hand-test.gltf";

//set up clock for rotate
const clock = new THREE.Clock();
var time = 0;

//set up dom object
const frame = document.getElementById("canvas");
const next = document.getElementById("next");
const back = document.getElementById("back");
const description = document.getElementById("description");

//we need three things: scene camera and renderer;
const scene = new THREE.Scene();
//camera has some properties, FOV , aspect, and clipping planes
let camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//renderersize should probably be same as window
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight, true);
//append the renderer to DOM
frame.appendChild(renderer.domElement);

//resize on window resize
window.addEventListener("resize", function () {
  let width = window.innerWidth;
  let height = window.innerHeight;
  renderer.setSize(width, height);
  camera.fov = (window.innerHeight / window.screen.height) * 30;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

//add hand var
let hand;
let cameraPointCounter = 0;
let camerapoints = [
  { x: 1, y: -5, z: 0 },
  { x: 1, y: -22, z: 0 },
];

var camera_offset = camerapoints[cameraPointCounter];

let debounce = 200;
let timestamp = Date.now();

next.addEventListener("mousedown", () => {
  if (Date.now() - timestamp > debounce) {
    timestamp = Date.now();
    if (cameraPointCounter != camerapoints.length - 1) {
      cameraPointCounter++;
    } else {
      cameraPointCounter = 0;
    }
    UpdateDesc(cameraPointCounter);
  }
});

back.addEventListener("mousedown", () => {
  if (Date.now() - timestamp > debounce) {
    timestamp = Date.now();
    if (cameraPointCounter != 0) {
      cameraPointCounter--;
    } else {
      cameraPointCounter = camerapoints.length - 1;
    }
    UpdateDesc(cameraPointCounter);
  }
});

const UpdateDesc = (number) => {
  switch (number) {
    case 0:
      fetch("/lib/html/description1.html")
        .then((result) => result.text())
        .then((text) => (description.innerHTML = text));
      break;
    case 1:
      fetch("/lib/html/description2.html")
        .then((result) => result.text())
        .then((text) => (description.innerHTML = text));
      break;
  }
};

//gltf test
let loader = new GLTFLoader();
loader.load(gtlfPath, (gltf) => {
  //replace camera with blender camera
  camera = gltf.cameras[0];
  camera.setFocalLength(45);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  //add blender scene to scene
  scene.add(gltf.scene);

  // find hand object
  hand = gltf.scene.getObjectByName("Cube012");

  //log all objects in gltf model
  gltf.scene.traverse(function (child) {
    console.log(child.name);
  });

  animate();
});

//to create a cube, we create the geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
//the material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//from which we construct a mesh
const cube = new THREE.Mesh(geometry, material);

//we add the object to scene and set camera position
// scene.add(cube);
// camera.position.z = 5;

var target = { x: 0, y: -0.5, z: 0 };
var camera_speed = 0.5;

const rotatearound = () => {
  camera_offset = camerapoints[cameraPointCounter];
  camera.position.x =
    target.x + camera_offset.x * Math.sin(time * camera_speed);
  camera.position.z =
    target.z + camera_offset.z * Math.cos(time * camera_speed);
  camera.position.y = target.y + camera_offset.y;

  camera.lookAt(target.x, target.y, target.z);

  clock.getDelta();
  time = clock.elapsedTime.toFixed(2);
};

//for anything to happen we need an animation loop
function animate() {
  //callback requesting animationframe
  requestAnimationFrame(animate);
  rotatearound();
  //render using scene and camera;
  renderer.render(scene, camera);
}
