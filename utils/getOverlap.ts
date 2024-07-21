import configCommon from "~/utils/getConfigCommon";
import * as THREE from "three";

export default function () {
    const {
        fullDepth,
        fullWidth,
        height,
        overlapHeight,
        erkerWidth,
        erkerDepth,
        depth,
        sideWidthLeft,
        sideWidthRight,
        wallHeight,
        facadeWallDepth,
        constructionWallDepth
    } = configCommon()

    const geometryHome = new THREE.BoxGeometry(depth - facadeWallDepth * 2, overlapHeight, fullWidth - facadeWallDepth * 2)
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
    homeMesh.position.set(depth / 2, height + wallHeight / 2 + overlapHeight / 2, fullWidth / 2)
    const geometryErker = new THREE.BoxGeometry(erkerDepth + facadeWallDepth, overlapHeight, erkerWidth - facadeWallDepth * 2)
    const erkerMesh = new THREE.Mesh(geometryErker, material)
    erkerMesh.position.set(depth + erkerDepth / 2 - facadeWallDepth, height + wallHeight / 2 + overlapHeight / 2, fullWidth / 2)

    homeMesh.receiveShadow = true
    erkerMesh.receiveShadow = true


    return [erkerMesh, homeMesh]
}
