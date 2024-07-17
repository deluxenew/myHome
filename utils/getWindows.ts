import getConfigWindows from "~/utils/getConfigWindows";
import * as THREE from 'three'
const {leftHomeWindowParams} = getConfigWindows()

export function getWindowHomeLeft() {
    const {width, height, depth} = leftHomeWindowParams
    const geometry = new THREE.BoxGeometry(width, height, depth)
    const material = new THREE.MeshToonMaterial({
        transparent: true,
        opacity: 0
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.userData = { ...leftHomeWindowParams }
    return mesh
}
export default {
    getWindowHomeLeft
}
