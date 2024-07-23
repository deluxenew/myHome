import * as THREE from 'three'

import setSubtractedObjects from "~/utils/setSubtractedObjects";
import getPartitionWallConfig from "~/utils/getPartitionWallConfig";
import {PartitionWall} from "~/utils/partitionWallTypes";


export default function (): THREE.Mesh[] {
    const wallParamsCollection = getPartitionWallConfig()

    const walls: THREE.Mesh[] = []

    function getUserFunctions(mesh: THREE.Mesh, wallParams: PartitionWall.Params) {
        const getFigureVolume = () => {
            const {width, height, depth} = wallParams
            return width * height * depth
        }


        return {
            getFigureVolume
        }
    }

    function getWallUserData(wallParams: PartitionWall.Params) {
        return {
            ...wallParams,
            category: 'wall',
            type: 'construction'
        }
    }

    function getMesh(wallParams: PartitionWall.Params) {
        const {width, height, depth, textureColor, rotationY, position: {x, y, z}} = wallParams
        const geometry = new THREE.BoxGeometry(width, height, depth)
        const material = new THREE.MeshPhysicalMaterial({color: textureColor, emissiveIntensity: 0, flatShading: true,
            transparent: false,
            opacity: 1})
        material.needsUpdate = true
        const mesh = new THREE.Mesh(geometry, material)


        const wall = setSubtractedObjects(geometry, wallParams.subtractObjectsParams)
        wall.material = material
        wall.userData = {...getWallUserData(wallParams), ...getUserFunctions(mesh, wallParams)}
        wall.rotation.set(0, rotationY, 0)
        wall.position.set(x, y, z)

        return wall
    }

    wallParamsCollection.forEach((wallParam: PartitionWall.Params) => {
        const wall = getMesh(wallParam)
        walls.push(wall)
    })

    return walls
}
