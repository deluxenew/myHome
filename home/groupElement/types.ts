import * as THREE from "three";
export namespace Group {

    export interface Config {

    }

    export interface Instance extends THREE.Group {

    }

    export interface Element {
        group3D: Instance
        config: Config
    }
}
