import * as THREE from 'three'
import './style.css'


const canvas = document.querySelector('canvas.webgl')

// const scene = new THREE.Scene()
// const myGeometry = new THREE.SphhereGeometry(1.5, 32, 32)
// SphereGeometry is a class inside the THREE variable and we instantiate them and then assign them to a variable and then use those variable. 1.5/32/32 are parameters.

// 4 elements for a basic scene: 

    // 1. Scene
    // 2. Objects
        // Objects 
        // these can be primitave geometrics like a cube, imported models, particles, lights, etc.
        // Mesh: a 3D visual object; it is a combination of a geometry (the shape) and a material (how it looks)
    // 3. Camera
        // theoretical point of view when rendering
    // 4. Renderer
        // renders the scene as seen from the camera's point of view. The result will be drawn into a canvas. We can create the canvas, or let the renderer generate it and then add it to your page

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.SphereGeometry(2, 100, 100)
    // Parameters: width, height, and depth 
        // these are passed as values
const material = new THREE.MeshStandardMaterial({
    color: "silver",
})
    // parameters here are passed as an object because there are so many
        // colors can also be sent as a class
const mesh = new THREE.Mesh(geometry, material)
    // you pass geometry and matieral as parameters of the mesh
scene.add(mesh)
    // add is a method and we are going to send a mesh as that method

// Light

const pointLight = new THREE.PointLight(0xffffff, 500, 500)
pointLight.position.set(0, 10, 20)
scene.add(pointLight)

// Camera
    // Two parameters
        // field of view: how large your vision angle is. Expressed in degrees
        // aspect ratio: the width of the canvas divided by its height. initialize sizes in a variable
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)

camera.position.z = 5

scene.add(camera)
    // adds camera to the scene


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2);
renderer.render(scene, camera);
// So at this point this will render a black cnavas because you render from the point of view of the camera: which until we transform the object will be from within the inside of the object. So right now the object is being rendered from within the cube (we are viewing the center of the object)

// Controls 


// Resize

window.addEventListener("resize", () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    // update camera
    camera.aspect = sizes.width/sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
});

const loop = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}
loop()



