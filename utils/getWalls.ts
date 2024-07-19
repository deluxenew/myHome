import * as THREE from 'three'


import type {WallParams} from "~/utils/types";
import setSubtractedObjects from "~/utils/setSubtractedObjects";
import getWallsParams from "~/utils/getWallsParams";


export default function (): THREE.Mesh[] {
    const wallParamsCollection = getWallsParams()
    console.log(wallParamsCollection)

    const walls: THREE.Mesh[] = []

    function getUserFunctions(mesh: THREE.Mesh, wallParams: WallParams) {
        const getFigureVolume = () => {
            const {width, height, depth} = wallParams
            return width * height * depth
        }


        return {
            getFigureVolume
        }
    }

    function getWallUserData(wallParams: WallParams) {
        return {
            ...wallParams,
            category: 'wall',
            type: 'construction'
        }
    }

    function getMesh(wallParams: WallParams) {
        const {width, height, depth, textureColor, rotationY, position: {x, y, z}} = wallParams
        const geometry = new THREE.BoxGeometry(width, height, depth)
        const material = new THREE.MeshLambertMaterial({color: textureColor})
        const mesh = new THREE.Mesh(geometry, material)

        const wall = setSubtractedObjects(geometry, wallParams.subtractObjectsParams)
        wall.material = material
        wall.userData = {...getWallUserData(wallParams), ...getUserFunctions(mesh, wallParams)}
        wall.rotation.set(0, rotationY, 0)
        wall.position.set(x, y, z)
        wall.receiveShadow = true
        wall.castShadow = true
        return wall
    }

    wallParamsCollection.forEach((wallParam: WallParams) => {
        const wall = getMesh(wallParam)
        walls.push(wall)
    })

    return walls
}
