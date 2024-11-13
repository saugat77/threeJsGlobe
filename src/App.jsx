import React from "react";
import * as THREE from "three";
import globe from "./assets/Img/Globe.jpg";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.MeshBasicMaterial({
     map: new THREE.TextureLoader().load(globe)
    })
);
scene.add(sphere);
console.log(sphere);

camera.position.z = 10;

function animate() {
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.001;

  renderer.render(scene, camera);
}
function App() {
  return <div>App</div>;
}

export default App;
