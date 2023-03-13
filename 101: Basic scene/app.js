const scene = new THREE.Scene();

// create red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#800020' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// create camera
const sizes = {
	width: 800,
	height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

// create renderer
const canvas = document.querySelector('#root');
const renderer = new THREE.WebGLRenderer({
	canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
