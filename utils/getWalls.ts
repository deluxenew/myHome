import * as THREE from 'three'
import configCommon from "~/utils/getConfigCommon";
import {getWindowHomeLeft} from "~/utils/getWindows";
import getCongigWindows from "~/utils/getConfigWindows";

import { SUBTRACTION, Brush, Evaluator } from 'three-bvh-csg';
import { MeshStandardMaterial, Mesh, SphereGeometry, BoxGeometry } from 'three';



interface WallParams {
    code: string
    width: number
    height: number
    depth: number
    textureColor?: THREE.Color
    rotationY: number
    position: {
        x: number,
        y: number,
        z: number,
    }
    subtractObjectsParams: {
        width: number
        height: number
        depth: number
    }[]
}

export default function (): THREE.Mesh[] {
    const {
        fullDepth,
        fullWidth,
        height,
        erkerWidth,
        erkerDepth,
        depth,
        width,
        sideWidthLeft,
        sideWidthRight,
        wallHeight,
        facadeWallDepth,
        constructionWallDepth
    } = configCommon()
    const windowHomeLeft = getWindowHomeLeft()
const {leftHomeWindowParams} = getCongigWindows()

    const wallParamsCollection: WallParams[] = [
        {
            code: 'HOME_RIGHT',
            width: depth,
            height: wallHeight,
            depth: facadeWallDepth,
            textureColor: new THREE.Color('brown'),
            rotationY: THREE.MathUtils.degToRad(0),
            position: {
                x: depth / 2,
                y: height + wallHeight / 2,
                z: facadeWallDepth / 2
            },
            subtractObjectsParams: []
        }, {
            code: 'HOME_LEFT',
            width: depth,
            height: wallHeight,
            depth: facadeWallDepth,
            textureColor: new THREE.Color('brown'),
            rotationY: THREE.MathUtils.degToRad(0),
            position: {
                x: depth / 2,
                y: height + wallHeight / 2,
                z: fullWidth - facadeWallDepth / 2
            },
            subtractObjectsParams: [leftHomeWindowParams]
        }, {
            code: 'HOME_BACK',
            width: fullWidth- facadeWallDepth * 2,
            height: wallHeight,
            depth: facadeWallDepth,
            textureColor: new THREE.Color('brown'),
            rotationY: THREE.MathUtils.degToRad(90),
            position: {
                x: facadeWallDepth / 2,
                y: height + wallHeight / 2,
                z: fullWidth / 2
            },
            subtractObjectsParams: []
        }, {
            code: 'HOME_FRONT_RIGHT',
            width: sideWidthLeft,
            height: wallHeight,
            depth: facadeWallDepth,
            textureColor: new THREE.Color('brown'),
            rotationY: THREE.MathUtils.degToRad(90),
            position: {
                x: depth - facadeWallDepth / 2,
                y: height + wallHeight / 2,
                z: sideWidthLeft / 2 + facadeWallDepth
            },
            subtractObjectsParams: []
        }, {
            code: 'HOME_FRONT_LEFT',
            width: sideWidthRight,
            height: wallHeight,
            depth: facadeWallDepth,
            textureColor: new THREE.Color('brown'),
            rotationY: THREE.MathUtils.degToRad(90),
            position: {
                x: depth - facadeWallDepth / 2,
                y: height + wallHeight / 2,
                z: fullWidth - sideWidthRight / 2 - facadeWallDepth
            },
            subtractObjectsParams: []
        }, {
            code: 'ERKER_RIGHT',
            width: erkerDepth,
            height: wallHeight,
            depth: facadeWallDepth,
            textureColor: new THREE.Color('brown'),
            rotationY: THREE.MathUtils.degToRad(0),
            position: {
                x: depth + erkerDepth / 2,
                y: height + wallHeight / 2,
                z: sideWidthLeft + facadeWallDepth / 2
            },
            subtractObjectsParams: []
        }, {
            code: 'ERKER_LEFT',
            width: erkerDepth,
            height: wallHeight,
            depth: facadeWallDepth,
            textureColor: new THREE.Color('brown'),
            rotationY: THREE.MathUtils.degToRad(0),
            position: {
                x: depth + erkerDepth / 2,
                y: height + wallHeight / 2,
                z: fullWidth - sideWidthLeft - facadeWallDepth / 2
            },
            subtractObjectsParams: []
        }, {
            code: 'ERKER_FRONT',
            width: erkerWidth - facadeWallDepth * 2,
            height: wallHeight,
            depth: facadeWallDepth,
            textureColor: new THREE.Color('brown'),
            rotationY: THREE.MathUtils.degToRad(90),
            position: {
                x: fullDepth - facadeWallDepth / 2,
                y: height + wallHeight / 2,
                z: fullWidth / 2
            },
            subtractObjectsParams: []
        }
    ]


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

    function setSubtractedObjects(geometry: THREE.BoxGeometry, wallParams: WallParams): THREE.Mesh {
        let mesh  = new Brush( geometry );
        const evaluator = new Evaluator();

        wallParams.subtractObjectsParams.forEach((params) => {
            const {width, height, depth} = params
            const brush=  new Brush( new BoxGeometry(width, height, depth) )
            brush.updateMatrixWorld();
            mesh = evaluator.evaluate( mesh, brush,  SUBTRACTION );
        } )

        mesh.updateMatrixWorld();

        return mesh
    }

    function getMesh(wallParams: WallParams) {
        const {width, height, depth, textureColor, rotationY, position: {x, y, z}} = wallParams
        const geometry = new THREE.BoxGeometry(width, height, depth)
        const material = new THREE.MeshToonMaterial({color: textureColor})
        const mesh = new THREE.Mesh(geometry, material)

        const wall = setSubtractedObjects(geometry, wallParams)
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
