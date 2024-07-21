import * as THREE from 'three'
import configCommon from "~/utils/getConfigCommon";

export default function () {
    const {fullDepth,
        fullWidth,
        height,
        erkerWidth,
        erkerDepth,
        depth,
        width,
        sideWidthLeft,
        sideWidthRight} = configCommon()


    const groundGeometry = new THREE.BoxGeometry(29000, 1, 15200)
    const groundMagerial = new THREE.MeshStandardMaterial ({color: 'green'})
    const ground = new THREE.Mesh(groundGeometry, groundMagerial)

    ground.receiveShadow = true
    ground.position.set(- 29000 /2 + fullDepth + 5000 ,-2,-15200 / 2 + fullWidth + 3000 )


    const geometryHome = new THREE.BoxGeometry(depth,  height, fullWidth)
    const material = new THREE.MeshStandardMaterial ({color: 0xbdbdb9});
    material.needsUpdate = true
    const homeMesh = new THREE.Mesh(geometryHome, material)
    homeMesh.position.set(depth /2, height/2,  fullWidth /2)
    const geometryErker = new THREE.BoxGeometry(erkerDepth,  height, erkerWidth)
    const erkerMesh = new THREE.Mesh(geometryErker, material)
    erkerMesh.position.set(depth + erkerDepth/2 , height /2, fullWidth /2 )
    homeMesh.castShadow = true
    erkerMesh.castShadow = true
homeMesh.receiveShadow = true
    erkerMesh.receiveShadow = true

    return [ground, homeMesh, erkerMesh]
}
