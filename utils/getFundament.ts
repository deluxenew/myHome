import * as THREE from 'three'
import configCommon from "~/utils/getConfigCommon";

export default function () {
    const {fullHomeDepth,
        fullHomeWidth,
        fundamentHeight,
        erkerWidth,
        erkerDepth,
        homeDepth,
        fullWidth,
        sideWidthLeft,
        sideWidthRight} = configCommon()


    const groundGeometry = new THREE.BoxGeometry(29000, 1, 15200)
    const groundMagerial = new THREE.MeshStandardMaterial ({color: 'green'})
    const ground = new THREE.Mesh(groundGeometry, groundMagerial)

    ground.receiveShadow = true
    ground.position.set(- 29000 /2 + fullHomeDepth + 5000 ,-2,-15200 / 2 + fullHomeWidth + 3000 )


    const geometryHome = new THREE.BoxGeometry(homeDepth,  fundamentHeight, fullHomeWidth)
    const material = new THREE.MeshStandardMaterial ({color: 0xbdbdb9});
    material.needsUpdate = true
    const homeMesh = new THREE.Mesh(geometryHome, material)
    homeMesh.position.set(homeDepth /2, fundamentHeight/2,  fullHomeWidth /2)
    const geometryErker = new THREE.BoxGeometry(erkerDepth,  fundamentHeight, erkerWidth)
    const erkerMesh = new THREE.Mesh(geometryErker, material)
    erkerMesh.position.set(homeDepth + erkerDepth/2 , fundamentHeight /2, fullHomeWidth /2 )
    homeMesh.castShadow = true
    erkerMesh.castShadow = true
homeMesh.receiveShadow = true
    erkerMesh.receiveShadow = true

    return [ground, homeMesh, erkerMesh]
}
