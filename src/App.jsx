import React from "react";
import gsap from 'gsap';
import * as THREE from "three";
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from "./shaders/fragment.glsl";
import globe from "./assets/Img/Globe.jpg";

import atmosphereVertexShader from "./shaders/atmosphereVertex.glsl";
import atmosphereFragmentShader from "./shaders/atmosphereFragment.glsl";
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

//create Atmosphere
const atmosphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({
    vertexShader: atmosphereVertexShader,
    fragmentShader: atmosphereFragmentShader,
    side: THREE.DoubleSide, // Ensure both sides of the sphere are rendered
    transparent: true,
    depthWrite: false,
  })
);
atmosphere.scale.set(1.1, 1.1, 1.1);
scene.add(atmosphere);

const group = new THREE.Group()
group.add(sphere)
scene.add(group);

camera.position.z = 15;

const mouse = {
  x: undefined,
  y: undefined,
};

function animate() {
  sphere.rotation.x += 0.001;
  sphere.rotation.y += 0.001;
  group.rotation.y = mouse.x * 0.5;

  renderer.render(scene, camera);
}

addEventListener('mousemove',()=>{
  mouse.x = (event.clientX/innerWidth) * 2-1
  mouse.y = -(event.clientX / innerWidth) * 2 + 1;
  console.log(mouse);
})
function App() {
  
}

export default App;
