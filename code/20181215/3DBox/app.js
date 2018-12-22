(function () {

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    let geom = new THREE.BoxGeometry(1, 1, 1);
    let mat = new THREE.MeshBasicMaterial({color: 0x00ff00});
    let mesh = new THREE.Mesh(geom, mat);
    scene.add(mesh);

    camera.position.z = 3;


    function render() {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        mesh.rotation.z += 0.01;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
})();