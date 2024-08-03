import configCommon from "~/utils/getConfigCommon";
import * as THREE from "three";

export default function () {
    const {
        fullHomeDepth,
        fullHomeWidth,
        fundamentHeight,
        overlapHeight,
        erkerWidth,
        erkerDepth,
        homeDepth,
        sideWidthLeft,
        sideWidthRight,
        wallHeight,
        facadeWallDepth,
        constructionWallDepth
    } = configCommon()

    const geometryHome = new THREE.BoxGeometry(homeDepth - facadeWallDepth * 2, overlapHeight, fullHomeWidth - facadeWallDepth * 2)
    const material = new THREE.MeshPhysicalMaterial({color: 0xbdbdb9, emissiveIntensity: 0, flatShading: true,
        transparent: true,
        opacity: 1});
    const homeMesh = setSubtractedObjects(geometryHome,  [{
            width: 3422,
            height: 200,
            depth: 1900,
            position: {x: 500, y: 0, z: 3422},
            rotationY: 90
        }]
    )
    homeMesh.material = material
    material.transparent = false
    material.alphaTest = 0
    material.lightMapIntensity = 0
    homeMesh.position.set(homeDepth / 2, fundamentHeight + wallHeight / 2 , fullHomeWidth / 2)
    const geometryErker = new THREE.BoxGeometry(erkerDepth + facadeWallDepth, overlapHeight, erkerWidth - facadeWallDepth * 2)
    const erkerMesh = new THREE.Mesh(geometryErker, material)
    erkerMesh.position.set(homeDepth + erkerDepth / 2 - facadeWallDepth, fundamentHeight + wallHeight / 2 , fullHomeWidth / 2)

    homeMesh.receiveShadow = true
    erkerMesh.receiveShadow = true


    return [erkerMesh, homeMesh]
}
