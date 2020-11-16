/* setup */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set( 0, 0, 25 );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls( camera, renderer.domElement );

/* scene */

const loader = new THREE.ObjectLoader();
loader.load( 'scene.json', onLoad );

function onLoad( illusion ) {
    scene.add( illusion );
    animate();
}

/*
const geo = new THREE.BoxGeometry( 1, 1, 0.5 );
const mat = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const box = new THREE.Mesh( geo, mat );
scene.add( box );
*/

/*
const streetGeo = new THREE.PlaneGeometry( 10, 2 );
const streetMat = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const street = new THREE.Mesh( streetGeo, streetMat );
scene.add( street );
*/

/* Example Box

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const box = new THREE.Mesh( geometry, material );
scene.add( box );

camera.lookAt( box.position );

*/

/* animation */
function animate() {
    
    controls.update();
    
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}