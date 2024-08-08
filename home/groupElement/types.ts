import * as THREE from "three";
import type {Box} from "~/home/boxElement/types";
export namespace Group {

    export interface Config {
        boxes: Box.Element
    }

    export interface Instance extends THREE.Group {

    }

    export interface Element {
        group3D: Instance
        config: Config
    }
}
