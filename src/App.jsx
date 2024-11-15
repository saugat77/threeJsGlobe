import React from "react";
import * as THREE from "three";
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from "./shaders/fragment.glsl";
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
 

//create Sphere
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({
     vertexShader,
    fragmentShader,
    uniforms:{
      globalTexture:{
        value: new THREE.TextureLoader().load(globe)
      }
    }
  })
);
scene.add(sphere);
console.log(sphere);

//create Atmosphere
const atmosphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    
  })
);
atmosphere.scale.set(1.1,1.1, 1.1);
scene.add(atmosphere);


camera.position.z = 15;

function animate() {
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.001;
  atmosphere.rotation.x += 0.001;
  atmosphere.rotation.y += 0.001;
  atmosphere.rotation.z += 0.001;
  renderer.render(scene, camera);
}
function App() {
  
}

export default App;
