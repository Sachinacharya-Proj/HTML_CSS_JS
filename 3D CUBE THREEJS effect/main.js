let scene, camera, renderer, cube;


function init(){
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
//const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
const texture = new THREE.TextureLoader().load( 'img/disturb.jpg',false );
material = new THREE.MeshBasicMaterial( { map: texture } );
cube = new THREE.Mesh( geometry, material );

scene.add(cube);
}

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;
    cube.rotation.z += 0.05;
    renderer.render(scene,camera);
}

init();
animate();

window.addEventListener("resize",()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})