
import * as THREE from 'three';

import { ThreePerf } from 'three-perf';

//

window.onload = () => {

    const canvas = document.getElementById( 'renderport' );

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setClearColor( 0x222222, 1 );

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 50 );
    camera.position.set( 10, 10, 10 );
    camera.lookAt( 0, 0, 0 );

    const spotLight = new THREE.SpotLight( 0xffffff, 1 );
    spotLight.position.set( 15, 15, 15 );
    spotLight.lookAt( 0, 0, 0 );
    scene.add( spotLight );

    const cube = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), new THREE.MeshPhongMaterial( { color: 0x00ff00 } ) );
    scene.add( cube );

    const perfMonitor = new ThreePerf({ renderer: renderer, domElement: document.body } );

    //

    const resize = () => {

        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

    };

    const render = () => {

        requestAnimationFrame( render );

        cube.rotation.x += 0.01;
        renderer.render( scene, camera );

    };

    window.addEventListener( 'resize', resize );

    resize();
    render();

};
