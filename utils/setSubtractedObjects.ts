import * as THREE from "three";
import {Brush, Evaluator, SUBTRACTION} from "three-bvh-csg";
import {BoxGeometry} from "three";
import type {WallParams} from "~/utils/types";
import type {SubtractObjectsParams} from "~/utils/types";

export default function(geometry: THREE.BoxGeometry, subtractObjectsParams: SubtractObjectsParams[]): THREE.Mesh {
    let mesh = new Brush(geometry);
    const evaluator = new Evaluator();

    subtractObjectsParams.forEach((params) => {
        const {width, height, depth, position: {x, y, z}, rotationY} = params
        const brush = new Brush(new BoxGeometry(width, height, depth))
        brush.position.set(x, y, z)
        if (rotationY)  brush.rotateY(THREE.MathUtils.degToRad(rotationY))
        brush.updateMatrixWorld();
        mesh = evaluator.evaluate(mesh, brush, SUBTRACTION);
    })

    mesh.updateMatrixWorld();

    return mesh
}
