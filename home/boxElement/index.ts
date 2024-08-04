import * as THREE from "three";
import type {Box} from "~/home/boxElement/types";
import TextureMaterial from "~/home/textureMaterial";

export default class BoxElement extends THREE.Mesh {

    constructor(public config: Box.Config) {
        super()
        this.config = config
    }

    public getElement(): Box.Element {
        const {geometryParams: {width, height, depth}, materialParams: {materialColor, materialType}, positionParams: {x,y,z}} = this.config;
        const geometry = new THREE.BoxGeometry(width, height, depth)
        const materialInstance = new TextureMaterial({materialColor, materialType})
        const material = materialInstance.getMeshStandardMaterial()
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(x, y, z)
        return <Box.Element>mesh;
    }
}
