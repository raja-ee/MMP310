/* setup */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set( 0, 40, 69 );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls( camera, renderer.domElement );

/* lighting */

const topLight = new THREE.PointLight( 0xff0000, 2, 60 );
topLight.position.set( 0, 30, 0 );
scene.add( topLight );

const light2 = new THREE.PointLight( 0x0000ff, 2, 60 );
light2.position.set( 0, -30, 0 );
scene.add( light2 );

/* scene */

const atmosGeo = new THREE.SphereGeometry( 80, 80, 80 );
const atmosMat = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.BackSide, transparent: true, opacity: 0.8 } );
const atmos = new THREE.Mesh( atmosGeo, atmosMat );
scene.add( atmos );

const wframeGeo = new THREE.WireframeGeometry( atmosGeo );
const wframeMat = new THREE.LineBasicMaterial( { color: 0x000000 } );
const wframe = new THREE.LineSegments( wframeGeo, wframeMat );
scene.add( wframe );

const torusGeo = new THREE.TorusGeometry( 50, 10, 32, 32 );
const torusMat = new THREE.MeshStandardMaterial( { color: 0xffffff } );
const torus = new THREE.Mesh( torusGeo, torusMat );
torus.rotation.x = Math.PI * -0.5;
scene.add( torus );

/* circle base
const baseGeo = new THREE.CircleGeometry( 50, 50 );
const baseMat = new THREE.MeshStandardMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
const base = new THREE.Mesh( baseGeo, baseMat );
base.rotation.x = Math.PI * -0.5;
scene.add( base );
*/

const loader = new THREE.ObjectLoader();
loader.load( 'scene2.json', onLoad );

function onLoad( illusion ) {
    
    illusion.scale.set( 11.9, 11.9, 11.9 );
    illusion.position.set( 0, 0, 0 );
    
    scene.add( illusion );
}

/* animation */
function animate() {
    
    controls.update();
    
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();