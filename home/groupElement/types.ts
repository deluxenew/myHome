import * as THREE from "three";
export namespace Group {

    export interface Config {

    }

    export interface UserData {

    }
    export interface Instance extends THREE.Group {
        userData: UserData
    }

    export interface Element {
        group3D: Instance
        getGroup3D: () => Instance
    }
}
